# Mascot, Onboarding, and Screensaver Specification

## Goals
Create a friendly, optional personality layer that helps new users learn the catalog without slowing or cluttering the core application.

## Guided onboarding
- A primary guide mascot accompanies the user through first-time setup.
- Guide the user through profile/avatar setup, collection setup, and the first coin.
- Guide the first coin through front photo, reverse photo, optional Scan & Identify/Research, review, confirmation, and save.
- After the first coin, offer to guide the user through additional coins.
- Allow the user to request additional guided examples (target: up to 3-4 guided coins) before choosing to continue independently.
- Provide a clear "I'm ready to go on my own" option.
- On completion, let the user meet/select from other available guide mascots, or keep the original guide.
- Never force the tutorial on experienced users; provide Skip Setup and access to help later.

## Profile avatar vs. guide mascot
- User profile picture/avatar is separate from the catalog guide mascot.
- Profile options include camera capture, device upload, generic avatars, and available mascots.
- User can remove a custom picture and return to a generic avatar.
- Guide mascot selection is optional and can be changed later.
- Include a "No mascot" option after onboarding.

## Help and troubleshooting
- Provide a friendly "How Do I...?" help area.
- Provide a searchable troubleshooting area that can grow as testing reveals confusing workflows or recurring problems.
- Help should use plain language and step-by-step instructions.
- Keep help available without forcing it into the primary catalog interface.

## Screensaver
- Optional idle screensaver featuring the available mascots.
- Screensaver animations must be implemented as a lightweight visual layer and must not continuously query or reload catalog data.
- Prefer already-loaded thumbnails/visible UI elements rather than full-resolution coin images.
- Animations should be event-driven and infrequent, with a performance-friendly mode and the ability to disable them.
- Possible activities include dancing, coin/money-bag tossing, mascot conversations, games, and playful interactions with visible coin thumbnails.

## Coin thumbnail interactions
- A mascot may occasionally approach a visible coin thumbnail and pretend to tug/pull/steal it.
- The actual catalog record, thumbnail, and database data must never be modified by a screensaver animation.
- A playful three-mascot "Monkey in the Middle" event may occur: one mascot takes a visual coin from another and tosses it to a third while the original owner tries to catch it.
- These are purely visual animations and must not trigger database writes, image loads, or catalog state changes.

## Exit behavior on user interaction
- User interaction must trigger a coordinated exit animation rather than simply making mascots disappear.
- Flying characters fly toward an appropriate screen edge.
- Walking/running characters walk or run off-screen.
- Slithering/inchworm characters move off-screen using their natural movement.
- Characters may scatter in different directions based on their position and movement style.
- Exit animation must be short and must not delay normal catalog interaction.
- The catalog remains immediately usable as the mascots leave.

## Trash/recycle visual gag
- Optional subtle flies may buzz around the recycle/trash area as a small Easter egg.
- The effect must remain visually unobtrusive and must never interfere with controls.

## Performance requirements
- No continuous polling of catalog records for mascot behavior.
- No full-resolution photo loading solely for animations.
- Use CSS/canvas or similarly lightweight client-side animation where appropriate.
- Pause or greatly reduce animation work when the tab/window is hidden or device resources are constrained.
- Respect reduced-motion/accessibility settings and provide a complete off switch.
- Screensaver must never block, delay, or alter catalog operations.
