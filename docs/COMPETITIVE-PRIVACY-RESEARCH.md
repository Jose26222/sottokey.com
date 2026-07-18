# Competitive privacy research

Reviewed: 2026-07-18

Purpose: keep SottoKey's privacy campaign accurate without turning public pages
into competitor comparisons. Use only first-party product, support, privacy, or
platform documentation. Recheck every source before making a named comparison.

## Platform facts

### Android input methods necessarily handle text

Android describes `InputConnection` as the communication channel between an
input method and the application receiving input. It supports reading selected
or surrounding text and committing text back to the host application.

- Android Developers:
  <https://developer.android.com/reference/android/view/inputmethod/InputConnection.html>
- Android Developers, creating an input method:
  <https://developer.android.com/develop/ui/views/touch-and-input/creating-input-method>

Campaign implication: it is fair to say a keyboard sits inside the user's
writing flow and necessarily exchanges text with the active host app. It is not
fair to imply that SottoKey prevents the host app itself from receiving,
storing, or transmitting text.

### INTERNET permission controls network sockets

Android documents `android.permission.INTERNET` as the permission that allows
applications to open network sockets, and requires permissions to be declared
in the application manifest.

- Android Developers permission reference:
  <https://developer.android.com/reference/android/Manifest.permission>
- Android Developers manifest overview:
  <https://developer.android.com/guide/topics/manifest/manifest-intro>

Campaign implication: SottoKey can prominently and verifiably sell that its
production app requests no INTERNET permission. Keep the claim scoped to
SottoKey's own app process; do not claim control over the host app or Android
system services.

## Official competitor positions

### Gboard

Google says Gboard does not send ordinary typed text such as passwords or chats
to Google. The same support page says searches, usage statistics, and voice
used for talk-to-text are sent for their respective services.

- Google Gboard Help:
  <https://support.google.com/gboard/answer/9058584>

Boundary: do not say or imply that Gboard uploads everything a user types.
SottoKey's distinction is the absence of the network permission and networked
features in the keyboard, not a claim that Gboard sends private conversations.

### Microsoft SwiftKey

Microsoft says SwiftKey's learned typing data stays on-device by default. Its
official documentation also describes optional account backup/sync, optional
typing-data sharing for product improvement, periodic usage statistics, and
crash information.

- Microsoft Support, sharing typing data:
  <https://support.microsoft.com/en-us/topic/microsoft-swiftkey-keyboard-sharing-your-typing-data-faq-d737059d-8810-448e-b376-9af56171a37d>
- Microsoft Support, collected/sent data:
  <https://support.microsoft.com/en-US/swiftkey-keyboard/what-data-is-collected-sent-while-using-microsoft-swiftkey-keyboard>
- Microsoft Support, OneDrive backup and sync:
  <https://support.microsoft.com/en-US/SwiftKey-Keyboard/swiftkey-backup-and-sync-with-onedrive>

Boundary: describe these services as optional where Microsoft does. Do not imply
that every SwiftKey user's typing is uploaded.

### Grammarly on Android

Grammarly says its Android product analyzes text in the active field and uses
accessibility and overlay access. Its privacy and security FAQ describes data
being transferred with TLS and processed or stored on hosted infrastructure;
it also says Grammarly does not sell or monetize user content.

- Grammarly Support, Android privacy:
  <https://support.grammarly.com/hc/en-us/articles/115003350672-How-Grammarly-protects-your-privacy-on-Android>
- Grammarly Support, privacy and security FAQ:
  <https://support.grammarly.com/hc/en-us/articles/20916119474829-Privacy-and-security-FAQs>

Boundary: SottoKey may contrast local rewriting with hosted writing assistance,
but must not claim that Grammarly sells writing or behaves as a keylogger.

### FUTO Keyboard

FUTO publicly positions its keyboard as fully offline and private, with offline
voice input, swipe typing, autocorrect, predictions, and themes.

- FUTO Keyboard:
  <https://keyboard.futo.org/>
- FUTO Keyboard documentation:
  <https://docs.keyboard.futo.org/about>

Boundary: SottoKey is not the only privacy-focused or offline Android keyboard.
Avoid exclusivity claims. Sell the verified combination SottoKey actually has:
no INTERNET permission, local rewriting, visible diff approval, and a complete
keyboard.

## Campaign decision

Do not use “if you are not paying, you are the product.” The official evidence
does not support payment model as a reliable proxy for keyboard privacy:
products with free tiers may keep ordinary typing local, paid products may use
hosted processing, and privacy-focused products may use honor-based payment.

The campaign territory is instead:

> A keyboard necessarily participates in what you write. SottoKey removes its
> own off-device network path, performs rewriting locally, and leaves every
> proposed edit under visible user control.

Public pages should express that idea without naming competitors. Technical
proof, claim boundaries, model limitations, and media provenance remain in the
proof page and repository documentation.
