---
title: The forgetful CPU (Linux on M4) - Blog
date: 2026-10-03
source_name: yuka.dev
source_url: https://yuka.dev/blog-2026-10-02-linux-m4.html
---

## easy

I bought an M4 Mac mini in November 2024 to run Linux. The chip needed new security called SPTM. This made the usual boot steps fail.

Early attempts showed the CPU stopped when setting up certain registers. I added a simple print routine to see where the boot stopped. The memory setup missed the serial port hardware. Fixing the page tables let the print work farther.

Later the boot stopped when writing a special CPU register. This register is used for virtualization. Removing that write let the kernel reach a shell. Another issue was the WFI sleep instruction. It cleared registers on this chip. Replacing those instructions with no‑ops let all cores start and Linux run.

## medium

In November 2024 I bought an M4 Mac mini, hoping it would run Linux quickly like previous Apple Silicon models. I learned that the M4 requires Secure Page Table Monitor, which makes things harder than with older generations. During this period I discovered many details about the processor.

My first attempts to boot Linux failed because GXF features were disabled in raw boot mode. Additionally, the RVBAR register needed special handling, but writing to it caused a crash. These obstacles made the initial setup challenging.

After waiting for a long time, I finally succeeded at the Chaos Communication Congress in late 2025. I created a minimal device tree with only the CPU cores and AIC interrupt controller. Using m1n1's linux.py with the earlycon parameter, I expected to see output, but nothing appeared until I added debug_putc. By inserting a simple print routine, I could see characters appear after vectoring to the next stage.

Debugging revealed that the MMU initialization was problematic. I modified the initial pagetables to map memory-mapped input/output space correctly. Further investigation showed that a write to SYS_IMP_APL_VM_TMR_FIQ_ENA_EL2 caused a crash. Commenting out this write allowed the kernel to boot successfully.

I then realized that secondary cores were not starting because smp_start_offset was missing. Adding the correct offset enabled them. However, a new crash occurred due to WFI instruction issues. On M4, the different behavior caused WFI to lose architectural state. In April 2026 I replaced WFI and WFIT instructions with NOPs, which fixed the problem. This change was eventually merged into mainline Linux and m1n19, allowing Linux to boot with all cores on M4 Macs.

The project continues with work on reverse engineering peripherals like cameras and displays. I am happy to share my contributions through donations to the Asahi Open Collective and the Asahi Linux community.

## hard

In November 2024, the author purchased an M4 Mac mini with the expectation that it would mirror the experience of earlier Apple Silicon models and receive rapid support within the Asahi Linux project. While the processor sat on the desk for several months, increasing technical understanding emerged about this SoC, revealing significant complications stemming from the mandatory inclusion of Secure Page Table Monitor (SPTM) in the M4 lineup. Unlike preceding generations where Linux bootstrapping relied on MMIO traces captured through the m1n1 hypervisor, the introduction of SPTM necessitated substantial modifications to m1n1 itself to achieve functional operation of macOS under the hypervisor environment. These alterations proved beyond the scope of the author's limited expertise at the time, yet the endeavor remained viable given the underlying challenges presented by the new architecture.

Early boot attempts encountered multiple obstacles that required careful navigation. The m1n1 hypervisor initially failed to launch in BRINGUP mode, crashing immediately during GXF3 initialization—a function that had been deliberately disabled or locked in raw boot configurations on these M4-based SoCs. Additionally, the RVBAR register, which designates the execution starting point for each CPU core upon power-up, contained incorrect values that triggered a crash when written to by m1n1 code. Despite these setbacks, the author discovered that a generic m1n1 uartproxy module appeared correctly in the system's USB enumeration list, enabling shell access through standard serial communication protocols.

Debugging efforts progressed when the author successfully identified that the MMU initialization sequence was responsible for the subsequent failure. The kernel's MMU setup operated exclusively within assembly code located in arch/arm64/kernel/head.S, placing it extremely early in the boot process. Because m1n1 created virtual-to-physical memory mappings solely to expose the MMIO address space at equivalent virtual locations, Linux lacked the necessary mappings for direct UART access once the Memory Management Unit became active. By modifying the initial pagetables to establish a one-to-one correspondence between MMIO regions and their virtual equivalents, the debug_putc utility function was restored to functioning properly throughout the boot sequence.

Further investigation revealed that a specific write operation to the implementation-specific CPU register SYS_IMP_APL_VM_TMR_FIQ_ENA_EL2 triggered a critical crash during early boot. Subsequent analysis indicated that this particular register relates to virtualization capabilities and had subsequently been unlocked in newer iterations of iBoot, rendering the original workaround unnecessary. With confirmation that actual Linux code was executing, the author shifted focus to understanding why the serial console remained silent despite the earlycon boot parameter having been applied. Adding the boot argument stdout-path='serial0' resolved the issue, providing complete register dumps and stack traces from the Linux kernel prior to any subsequent failures.

Secondary core activation presented additional hurdles due to the absence of the smp_start_offset constant, which serves as a hardware-dependent offset required for proper synchronization initialization. By employing the offset previously calibrated for base M1-M3 configurations, the author successfully initiated the auxiliary cores. However, reloading the Linux kernel exposed another cryptic crash, prompting deeper examination of the WFI (Wait For Interrupt) instruction behavior across different CPU generations. On M1-M3 SoCs, the XNU operating system preserved architectural state during WFI transitions by saving and restoring registers to the stack, whereas M4 appears to have altered this behavior—either through a locked chicken bit or removal of the relevant configuration—and violated the official ARM64 specification requiring preservation of architectural state when WFI completes normally.

To resolve the WFI-related instability, the author substituted all WFI and WFIT (Wait For Interrupt with Timeout) instructions within the kernel with no-operation sequences, effectively eliminating the problematic instruction altogether. This approach allowed Linux to operate with all cores fully enabled rather than constrained by sleep-state limitations. Concurrently, downstream mechanisms such as the cpuidle-apple driver and Sven's PSCI EFI conduit development were being explored to provide formal support for disabling WFI idle modes on bare-metal systems exhibiting similar behavioral anomalies.

By April 2026, the integration of these fixes into mainline Linux and m1n1 branches enabled native booting of Linux on M4 Macs with secondary cores fully operational. The resolution addressed a fundamental barrier to running Linux on M4 and subsequent Apple Silicon platforms, establishing a foundation for continued advancement in peripheral reverse engineering and broader system integration efforts. The collaborative nature of the project ensured that contributions benefited the wider community, with ongoing work focused on expanding support for complex subsystems including cameras, displays, and graphics processing units.
