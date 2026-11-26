# V9.1 — Union information shortcut

Adds a full-width Union information button directly after the home Quick actions grid, above the backup reminder. It opens the existing Local 166 Resources screen in English or Spanish; the existing More menu link is retained. No vault or data format changes. For an existing V9 deployment, replace `app.js`, `index.html`, `premium.js`, `premium.css`, `sw.js`, and optionally `README.md`, or upload the complete package. Back up the private vault first and retain the same member app URL.

# V3 — Centered logo update

The original uploaded KP Teamsters artwork is displayed prominently above the title on every screen, independent of the vault. All V2 workflows and vault storage are unchanged. Replace the files in the existing member repository; include the new `kp-logo-v3.jpg`. If the old header persists, reload the published site after GitHub Pages deploys. Back up your vault before any browser troubleshooting; do not clear site data.

# Teamsters Union Assistant — Member Edition V2
Independent GitHub Pages prototype, not an official Local 166 service. Updated with the supplied KP/Local 166 logo, teal/navy/gold design and the existing blank grievance layout. Separate vault and repository. Do not replace the steward app.

## Upgrade from V1
Back up your private vault before updating. Replace the files in the existing **member** repository root (not the steward repository). V2 retains the same browser database name and origin-based storage; reopening at the same HTTPS URL should retain existing data. If your icon is cached, remove and re-add the Home Screen shortcut after updating (back up first).

## Install / publish
1. Extract the ZIP. Create a NEW GitHub repository named `Teamsters-Member-Assistant` (public for free Pages on a personal account). Do not upload actual grievances, private contracts, or member details into the repository.
2. Upload the extracted files directly to the repository root, then commit.
3. Go to Settings → Pages → Build and deployment → Deploy from a branch → main → / (root) → Save. Open the published HTTPS URL once it is ready.
4. iPhone: open the URL in Safari, tap Share, then Add to Home Screen. Desktop: open the HTTPS URL in a current browser. No backend/account needed. Public rights, agent directory and links are accessible without a vault passphrase.

## Member workflows
- Weingarten statement, rights guidance, links to NLRB and Teamsters, representative directory with employer search.
- Case screening: red = prompt representative review for possible urgent issue; yellow = more information needed; green = relevant indexed text and reported supporting records. This is deterministic triage, not an AI merits decision. No result rules out a case. If unsure, contact your representative promptly; filing deadlines may be short.
- Optional local Member AI: WebLLM 0.2.89 / Qwen2.5 0.5B or 1.5B, downloaded only after pressing Load local AI. Uses selected-by-retrieval indexed source excerpts and produces draft explanations; keyword relevance is not proof of a violation. No paid API or cloud inference configured. Download sizes may be hundreds of MB or more and WebGPU/device memory support varies. Use Wi-Fi; source search and screening work without the model. The external runtime is not bundled or independently audited.
- Contract library: upload current employer-specific contract, amendments, policies and forms. No old Kaiser contract is automatically published. A text PDF can optionally be indexed locally by PDF.js 4.10.38 loaded from CDN; scanned PDFs require OCR elsewhere or pasted text. Original files stay in the device vault. A new grievance form upload is stored as reference only; exporting still uses the existing blank Local 166 layout until the template is mapped/updated.
- Grievance builder: enter one field at a time, save, review, export a filled PDF using the previously supplied Local 166 blank layout. Optional notes go into grievance statement / continuation pages. Signatures, grievance number, last four SSN and Step 1–4 dispositions stay blank for the union. Generated PDF is not encrypted. Use share sheet on compatible browsers or download and manually attach to a verified rep's text/email; no automatic filing or sending. Personal status is manual.
- Calendar: personal events, union meeting notes, confirmed deadlines and follow-ups, optional .ics export. No live event synchronization or background notifications. Official site links are provided.
- Profile: employer and representative contact, autofill, light/dark and larger text.
- Vault: separate IndexedDB database, AES-GCM encryption with PBKDF2-SHA256 600,000 iterations, 12+ character passphrase, automatic lock after five minutes of inactivity, encrypted JSON backup. No sync, identity verification or password reset. Clearing browser data may delete the vault. Use fictional data until privacy/security review; third-party runtime code can access browser context and downloaded copies are not encrypted. No patient information. A public GitHub Pages link is not access control.

## Sources (checked Nov 25, 2026)
- https://teamsters166.com/ (official links, news & calendar entry points)
- https://teamsters166.com/agents (agent assignments and extensions; confirm before contacting)
- https://teamsters166.com/bloomington (main office)
- https://teamsters166.com/scholarships (listed April 1, 2027 scholarship deadline; verify)
- https://www.nlrb.gov/about-nlrb/rights-we-protect/your-rights/weingarten-rights
- https://teamster.org/member-resources/weingarten-three-decades-union-representation/
- https://github.com/mlc-ai/web-llm and https://github.com/QwenLM/Qwen2.5 (Apache-2.0); https://github.com/mozilla/pdf.js (Apache-2.0).

## Testing status
JavaScript syntax verified; a browser end-to-end test was blocked by environment browser policy. Model download, device-specific PDF export/sharing and offline behavior remain unverified. Test on desktop and iPhone using fictional details before sharing. Check union permission for branding and contract distribution. No live deployment has been made.

## V4 — Incident Log
- Single-line bottom navigation: Home, Member AI, Incident Log, Grievance, More. Rights remain on Home and More.
- Encrypted incident notes, editable incident date/time, creation timestamp, evidence files and optional local microphone voice memo (2 minutes max). Stop recording, then Save & open calendar. No background recording. Unsaved changes can be lost when the vault locks. Use keyboard dictation for written notes; automatic audio transcription is not included.
- Calendar marks incidents and event categories; select a date to open its incident timeline. Incidents are not duplicated as ordinary events. Multi-select incident reports, AI question handoff or grievance drafts. No automatic filing. Reports are text; recordings and attachments can be exported separately.
- Existing V3 vault format and database retained; incident array initialized on unlock. Back up before updating. Microphone requires HTTPS and browser permission. Test with fictional information. No patient identifiers or recording others without appropriate consent.

## V5 — bundled contract and original-template grievance export
- Member-only edition, separate from the Steward repository. Upload every V5 file to the existing Member repository. Back up the member vault first; its database and encryption format are unchanged.
- Bundles the user-supplied Kaiser/SCPMG Local 166 agreement (2022–2025, 89 PDF pages) and a page-indexed text source. The stated term has ended; confirm current coverage and amendments. The reference is not evidence of current entitlement. Other employers should choose their own agreement. Private documents can still be added.
- The blank grievance PDF is the supplied fillable reproduction, not independently authenticated as the union's current official form. The completed export overlays actual vector text onto that PDF, leaves signatures and union processing fields blank, and adds continuation pages for longer entries and witness notes. No external PDF library needed. Some characters outside the standard Western European font require replacement.
- Review draft > Prepare completed grievance PDF > Preview > Share PDF by text / email. Sharing uses the device share sheet with the actual PDF attachment; choose Messages or Mail and confirm recipient. If unsupported, download and attach manually. Nothing is sent automatically.
- Public GitHub Pages exposes the bundled PDFs and indexed text to anyone. Confirm union permission to distribute them before deploying; never upload completed forms, recordings, or private member data to GitHub.
- Tested PDF generation in Node and rendered with PDF tools; mobile share and AI still need device testing.

## V6 — Sign and share
- Optional handwritten employee signature pad with undo/clear and explicit intent checkbox. Signature/date are drawn as vectors onto the actual bundled form. Steward signature and dispositions stay blank. Confirm the union accepts electronic signatures.
- Signed PDF is stored inside the existing encrypted vault; opening a signed draft goes directly to review. Editing grievance content requires confirming removal of the saved signed copy. Save/download a copy before editing if needed. Unsigned export remains available.
- Manual sent status and recipient/timestamp tracking; no automatic filing, receipt confirmation, or outbound messages. Use native file sharing or download and attach manually.
- Bundled contract remains 2022–2025 reference, not verified current. Obtain current agreement and distribution permission. Public Pages is not membership authentication.
- Upgrade only the Member repository; backup your vault first. Same storage and URL; upload all 18 files.

## V7 — Member Privacy & Accessibility Edition

Deploy all 21 files in the existing **member** GitHub Pages repository, not the steward repository. Back up your vault before replacing files. The existing database name, encrypted format and contract/PDF template are retained. New users set a 12+ character passphrase and complete a profile; existing users unlock the same vault. The app opens to the vault gate, unlocks once for the session, and locks after 15 minutes of inactivity or on manual lock. Emergency rights and public contact directory remain available without unlocking. This is device-local protection, not verified union membership or a network login. GitHub Pages, the QR link, and bundled PDFs are public; obtain authorization before distribution. No shared grievance records. Do not reuse the SSN digits as a passphrase. Last four digits are optional, stored encrypted, and included in the official PDF when provided. Shared PDFs are unencrypted; verify recipient.

English/Español: switch from the header. Spanish covers primary screens, labels, rights statement, and key notices; some secondary messages and original source content remain in English. Contract and original grievance template remain unchanged. Local AI is prompted to answer in Spanish when selected; source search includes common Spanish terms but may miss results. Use representative review. Changing language rerenders the active screen, so save work first.

More > Share app generates a QR code locally from the published app URL only (no personal data). Copy/share link or download the QR. More > Paycheck audit uses manually entered verified gross pay, non-overlapping hours and multipliers; it is an estimate, not an interpretation of the contract. It can open an incident draft. The bundled 2022–2025 agreement is past its stated term; verify the current agreement. Incident Log includes CYA/management instruction category and phone camera capture for evidence, not OCR or automatic scan enhancement. Calendar highlights upcoming manually confirmed deadlines/follow-ups on Home and includes a one-day alarm when exporting those events to phone calendar; importing and notification settings depend on device, and there is no background push service. No Face ID or union membership authentication in this version. Existing signed/unsigned PDF, encrypted backup/restore and audio memo features retained.

Checks: JavaScript parsed with Node; QR generated by bundled library decoded correctly in an independent decoder; original PDFs and logo are unchanged. Browser navigation blocked by environment policy, so real-device flows still require testing. See QR-LICENSE.txt for QR library license.

## V8 — Optional AI download management
Under Member AI, Load local AI downloads or reuses the selected model, Release model stops inference and retains the download, and Delete AI Download removes the cached files for both Qwen options (including their alternate GPU precision variants). Confirmation is required. Deletion checks only known WebLLM Cache API scopes and matching model URLs; it does not clear site data, app caches, IndexedDB, or the private vault. You can download again anytime on a compatible device. The browser controls storage accounting and may retain ordinary network cache entries. Model caches can be shared across GitHub Pages projects at the same origin; close other AI tabs before deleting. The Steward app code and private records are not modified, but a shared model may need downloading again. No new runtime dependency. Spanish labels included.

## V9 — Premium UI & Personalization Edition

Upgrade only the existing **Teamsters-Member-Assistant** GitHub Pages repository. Back up your encrypted vault first (More → Privacy & Security → Export encrypted backup). Unzip the release and upload all 23 files at repository root. New files: `premium.js`, `premium.css`. Updated files: `index.html`, `app.js`, `sw.js`, `README.md`. All other files are unchanged. Your existing URL, manifest scope, vault database (`teamsters-local166-member-v1`), vault format, and app icons are preserved. Do not clear website data or delete/reinstall the home-screen app. The separate Steward app must not be updated with this package.

### Appearance
More → Appearance includes local photo picker for profile and wallpaper, image compression and metadata removal through canvas re-encoding, viewport cropping by position and zoom, live sample preview, brightness, darkness, blur, card opacity, home-only or all-pages wallpaper, custom accent, preset themes, text scaling, profile visibility, dashboard statistics, privacy mode, optional transitions, reduced motion, shimmer, splash, vibration where supported, backup reminders and reset. Save changes to persist; Cancel discards the changes. Photos and customization preferences are encrypted in the existing member vault, not uploaded. Custom photos are not displayed before unlock. The optional splash plays once after the first unlock on each launch. Profile images are sized to 600 pixels maximum; backgrounds to 1600. The app accepts browser-decodable image types. HEIC support depends on the browser. The card opacity minimum is deliberately 85% for legibility; the accent is applied to decorative highlights instead of overriding important warning/text colors. Vibration is generally not available on iOS. No biometric authentication added.

### Member AI and other tools
The original source-grounded local AI engine, screen-first grievance guidance, optional model cache removal, and download/release controls remain. Member AI → AI model settings expands controls and displays progress during the download. Estimated model sizes are planning ranges only, not measured device footprints. More → AI & Storage reports browser estimates and known cache bytes, where available. This can include shared caches from the Steward app on the same origin; its private records are unaffected by model deletion. The model download is optional. No subscription is introduced.

Conversation history is opt-in, encrypted, and independent of the model download. Start a new chat, search saved chats, delete the selected conversation, or clear all chats. Turning off saving starts a temporary conversation; saved conversations remain until explicitly deleted. Temporary chats are cleared on lock/reload. Saved answers can be deleted separately from contract bookmarks. Clearing conversations does not remove existing exported backups or saved answers. Select source search, bookmarked source excerpts, and FAQ without loading an AI model. The home dashboard shows private counts and upcoming confirmed dates; privacy mode hides counts, name, and avatar. Existing draft, signed, sent, awaiting follow-up and closed status choices are personal tracking, not official filing. Saved steward links provide call, SMS and email. English/Spanish coverage includes main new controls; some secondary and dynamic messages remain English, and original source documents retain their original language.

### Validation and limitations
All JavaScript syntax checks passed. A simulated legacy-vault encryption/decryption roundtrip, saved/temporary conversation isolation, deletion preserving existing records and photos, and contract search passed. Verified the original logo, app icons, contract and grievance PDF, form and signature logic and incidents code are byte-identical to V8. All service-worker precache paths exist. Full browser testing was blocked by the environment, so actual image-picker interactions, responsive layout, navigation, offline operation, model download/reinstall, microphone and signed PDF sharing require real-device testing. New styling follows the written brief; no separate premium reference image was available. The public GitHub deployment is not verified members-only authentication; the local vault separates personal records, and the bundled 2022–2025 contract is past its stated term. Confirm distribution authorization, current terms and acceptance of electronic signatures. Existing CDN-dependent PDF and AI features may require internet on first use. Test with fictional data before distribution.
