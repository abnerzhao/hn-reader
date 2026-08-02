---
title: MkLinux and the pimped-out Apple Workgroup Server 9150
date: 2026-08-01
source_name: oldvcr.blogspot.com
source_url: http://oldvcr.blogspot.com/2026/08/mklinux-and-pimped-out-apple-workgroup.html
---

## easy

The Apple Workgroup Server 9150 is a powerful old Mac. It was built for servers, not for home use.

It uses a 80‑MHz PowerPC 601 chip. The case holds up to two 1‑GB hard drives. It can hold up to two 1‑GB drives. It also has a 512‑KB cache.

The machine can run classic MacOS or MkLinux. MkLinux adds a Unix layer on top.

Rebuilding it needs new RAM, a faster CPU, and video cards. Apple first made servers in the 1980s. The 9150 followed earlier models like the 8150.

## medium

Rebuilding the Apple Workgroup Server 9150 began as a routine repair, but the goal was to transform it into a MkLinux machine. The 9150, a unique member of Apple’s server family, was originally designed for A/UX and AppleShare. By adding more RAM, a faster CPU, and modern video cards, the server can now run both classic MacOS and Linux.

Apple’s server strategy in the early 1990s evolved from the failed Macintosh Office concept to the Workgroup Server line. The first models, the 60, 80, and 95, were essentially high‑end Quadras equipped with A/UX and AppleShare. They offered larger hard drives, extra RAM, and optional AppleShare Pro licenses, positioning Apple as a viable option for institutional customers who needed Unix‑based services.

MkLinux, a port of Linux that runs on the Mach microkernel, emerged after the 9150 was discontinued. Although the server was built for A/UX, its NuBus architecture and PowerPC 601 CPU make it a suitable platform for MkLinux. By installing the MkLinux kernel and userland, the machine gains a modern, open‑source operating system while still retaining the ability to run legacy Mac applications through the classic MacOS environment.

The rebuild required significant hardware changes. The original 9150 case was modified to accommodate a low‑mounted floppy drive and a new DAT/DDS bay, making it the only Macintosh with that configuration. Additional NuBus slots were added, and the internal drive tray was upgraded to hold up to two 2 GB drives. These modifications, combined with a 512 KB L2 cache and 24 MB of RAM, provide the performance needed for MkLinux workloads.

With the upgraded hardware and MkLinux installed, the server now offers the best of both worlds. Users can run modern Linux applications, access powerful networking features, and still boot into classic MacOS for legacy software. The 9150’s unique case design and expanded storage make it a versatile platform for developers and enthusiasts who want a single machine that bridges Apple’s historic server lineage with contemporary open‑source technology.

## hard

The reconstruction of this flaky Apple Workgroup Server 9150—the idiosyncratic outlier of the Workgroup Server line and an older cousin to the beloved Apple Network Server—commences with a fundamental necessity: a complete rebuild. This machine is essentially an overgrown NuBus Power Mac, and to transform it into a hybrid powerhouse capable of running both classic MacOS and MkLinux, it requires significant hardware upgrades, including expanded RAM, a more robust CPU, and various video cards. Yet, before the mechanical restoration can begin, one must understand the complex lineage of Apple's server strategy, which traces back to the failed Macintosh Office concept of the mid-1980s and the subsequent strategic shifts under CEO John Sculley.

Apple’s foray into networking began with the 1985 Macintosh XL, a high-spec version of the Lisa designed to provide networked file storage and shared printing via AppleTalk. This era was defined by Steve Jobs' ambitious 'Big Mac' project, a machine intended to serve as a high-end Unix workstation or file server within a Macintosh Office constellation. However, the rapid, unexpected success of the XL exhausted inventory before the 'Big Mac' was even ready, forcing a premature end to the Macintosh Office initiative. Amidst the fallout, the company's image in the corporate sector suffered, prompting Sculley to promise a renewed commitment to business customers through the introduction of the Macintosh Plus and the subsequent development of the Macintosh II.

A critical component of this evolution was the development of A/UX, Apple's own hybrid System V UNIX implementation. Though the initial version faced significant technical hurdles—such as limited MultiFinder support and a restrictive programming interface—it represented a serious attempt to enter the high-end workstation market. By the release of A/UX 2.0 in 1990, the system had matured significantly, offering compatibility layers that allowed Macintosh, command-line, and X11 applications to coexist on a single screen. This progress set the stage for Apple’s transition toward the PowerPC architecture and the eventual pursuit of more robust server hardware.

By 1993, Apple officially entered the server market with the Workgroup Server 60, 80, and 95. These were not entirely new machines but were essentially high-spec rebadges of existing Quadra and Centris models, shipped with full 68040 processors, expanded RAM, and A/UX capability. The AWS 95, codenamed 'Chinook,' was particularly notable for its high-performance PDS SCSI/L2 cache card and support for A/UX 3.0.1. Despite the technical sophistication of these systems, their value proposition was inconsistent, leading to tepid sales in many sectors, even as they found a niche among institutional customers requiring high-performance Mac workstations that could also function as servers.

As the industry moved toward PowerPC, Apple faced the daunting task of maintaining server momentum during a period of significant corporate upheaval. While there were lofty promises of a 64-bit PowerPC server running a revamped A/UX 4.0 or AIX, the reality was far more pragmatic. The development of the 'Green Giant'—the Workgroup Server 9150—was driven by the need to provide a viable server solution during the transition to the PowerPC 601. This era also saw an unexpected partnership with Novell to port Portable NetWare via the 'Wormhole' project, a strategy aimed at capturing the dominant network operating system market of the early 1990s.

The resulting Workgroup Server 9150 emerged as a unique beast, physically distinct from any existing desktop Macintosh. To accommodate the required DAT/DDS tape drive and a CD-ROM, the chassis required a radical modification: the floppy drive was moved from the top to the bottom of the front panel, a design feature unique to this model. The 9150 offered impressive configurations, utilizing an 80MHz PowerPC 601 with up to 24MB of RAM and multiple 2GB drives. It remains a singular artifact of Apple's attempt to bridge the gap between the classic Macintosh ecosystem and the rigorous demands of professional enterprise networking.
