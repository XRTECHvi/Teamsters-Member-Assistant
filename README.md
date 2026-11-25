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
