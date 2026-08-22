# Project TODO

- [x] Redeem the `audit_claim` token after OAuth returns the user to the application — completed in Lifewoven-App commit ba14ede.
- [x] Wire the Profile page’s `Sign Out` button to the working shared sign-out handler — completed in Lifewoven-App commit ba14ede.
- [x] Move the account-menu `Sign out` control above secondary account links so it remains visible without menu scrolling — completed in Lifewoven-App commit ba14ede.
- [x] Add regression tests for audit-claim redemption and shared sign-out behavior — completed in Lifewoven-App commit ba14ede.
- [ ] Apply Lifewoven-App migration 0036_silent_frog_thor.sql in the app deployment environment and confirm the audit_claims table exists.
- [ ] Verify the live anonymous survey → OAuth return → audit.redeemClaim flow after the app deployment migration.
- [x] Replace unsupported audio and PDF format claims in the Library marketing copy with the specified guided-script and interactive labels.
- [x] Rename Reset Audio to The Reset Protocol and correct its advertised 45-minute guided-script label.
- [x] Replace all marketing Library retail-value claims of $607 with $592.
- [x] Audit the Lifewoven app and available catalog source for stale audio, PDF, Reset Audio, and $607 claims.
- [x] Validate the corrected marketing page and record catalog or app changes owned by separate deployments.
- [x] Repair the development preview Vite configuration so the client entry resolves from the configured client root.
- [x] Prioritize F-03: replace the three live marketing audio-recording claims with the approved narrated-script and guided-script copy.
- [x] Restore verified PDF labels and the $607 Library retail total on the marketing site; preserve all nine catalog prices, except for the approved F-03 display wording of `7 narrated scripts` and `45-min guided script`.
- [x] Update marketing regression coverage to require F-03-safe language while protecting approved PDF labels and $607 pricing.
- [x] Reconcile the Lifewoven-App catalog with revision 3: keep $27 Reset pricing, retain verified PDF delivery claims, and remove only recording-specific promises.
- [x] Audit and correct the app Resource Library and marketplace filters without misrepresenting scripts as recordings.
- [ ] Update F-01 in the external `reset-audio.html` product-platform source once that package or repository is made available in this workspace.
