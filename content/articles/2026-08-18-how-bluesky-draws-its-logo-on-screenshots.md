---
title: How Bluesky draws its logo on screenshots
date: 2026-08-18
source_name: timmarinin.net
source_url: https://timmarinin.net/2026/bluesky-screenshots/
---

## easy

Users take screenshots often. They see a logo in the picture. But inside the app, the logo is gone. Instead, a Follow button shows.

The app hides the logo using a special tool. This tool makes a text box invisible. iOS covers this box when taking a photo. That lets the logo show up.

Other phones do not need this trick. This method is known online. Telegram and Signal use similar ways too. Apple does not patch this quickly. It seems like a clever trick for hiding icons.

## medium

When I take a screenshot of a post I like, I often share it with friends or save a permanent copy. In one case I noticed something strange. The Bluesky logo appeared in my screenshot, but when I opened the app normally the logo was missing. Instead I saw a 'Follow' button where the logo should have been. I wondered how this could happen since many apps hide their logo behind the notch area until a screenshot is taken.

I decided to investigate further. After checking the code, I found that the Bluesky app uses a package called expo-privacy-sensitive. This package creates a secure text entry field and displays the button inside it. When iOS captures a screenshot, it temporarily blanks this field to prevent interference. As a result the logo becomes visible through the blanked layer. Other mobile platforms render the content directly without this masking effect.

The reason this works specifically on iOS is that the system takes a snapshot at the beginning of the screenshot action. By then the secure text field has already been removed from view. Once the screenshot is captured, the logo can appear freely. On Android and other systems the field remains visible throughout the process, so the logo never shows up.

This technique is not new. Similar methods are used by Telegram for its secret chats and by Signal for private messaging. It seems likely that Apple will not patch this behavior anytime soon. The trick is clever and adds a small touch of fun to the experience. While it may seem like an abuse of privacy features, it appears to be a harmless implementation detail rather than a security flaw.

## hard

I often capture screenshots of posts I find compelling, either to share with friends in a meme channel or to preserve a 'durable' copy for myself. On one such occasion, I took a screenshot of a post that interested me, cropping out the rest of the interface. It was then that I noticed the Bluesky logo in the corner, a detail that struck me as peculiar. The logo never bothered me while I used the app itself. Returning to the post within the application, I saw the logo was absent, replaced by a 'Follow' button. I recalled that several applications cleverly conceal their logos behind the iPhone's notch to avoid visual disruption, revealing them only in screenshots. Yet here, the logo was prominently placed. How, I wondered, did they achieve this?

To investigate, I attempted another screenshot, this time capturing the moment of switching to a different application. The 'Follow' button remained visible in this mid-switch capture. I pondered whether they had implemented a listener to detect the simultaneous press of two buttons—the screenshot and the app switch—and performed a last-second substitution. As I am not an iOS developer, I was uncertain of the technical feasibility. My curiosity, however, was piqued. Fortunately, I remembered that the Bluesky application is open-source, or at least its code is accessible for review.

The answer was found in a file literally named GrowthHack.tsx, introduced in January 2026 by a user named mozzius. This file merely utilized a dependency, so I delved deeper into the package expo-privacy-sensitive, also created by them. This package constructs a UITextField with the isSecureTextEntry property set to true and renders the actual content—the button—into that field's .layer. When I take a screenshot, iOS blanks this UITextField by masking the layer, allowing the Bluesky logo to appear as if it had been there all along. For other platforms, the content is rendered without any such masking.

I questioned why this mechanism failed when switching between applications. My hypothesis is that iOS captures a snapshot at the beginning of the gesture, without triggering the blanking effect. Consequently, when a screenshot is taken during a switch, there is no active UITextField instance to react; only the inert snapshot exists. Once again, I must reiterate that I am not an iOS developer. Is this a nifty trick or an abuse of an API intended for privacy purposes? The individuals who added this behavior in the discussion thread largely disliked it before the thread was locked. I, however, find it quite charming.

A quick search revealed that this technique is well-established. Telegram implemented a similar feature for its 'secret' chats, as did Signal. Therefore, I do not anticipate Apple addressing or patching this behavior in the near future.
