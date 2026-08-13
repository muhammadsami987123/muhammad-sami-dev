# Project Detail Modal: Add a Clear Animated Scroll Indicator

The current project detail modal works correctly, but there is one important UX problem.

When a user opens a project, the modal contains more content below the visible viewport. However, there is **no obvious visual indication that the modal is scrollable**.

A user may not realize that they need to scroll inside the modal to see:

* Overview
* Features
* Technology stack
* Project details
* Live Demo
* GitHub / Source

The uploaded screenshot shows the current modal. Keep the existing design, but add a subtle, elegant visual cue that clearly communicates:

> "There is more content below. Scroll down."

---

## 1. ADD AN ANIMATED SCROLL INDICATOR

Place a small animated scroll indicator at the **bottom-center of the modal's content area**.

It should look like a minimal downward arrow.

Example concept:

```text
              ↓
           scroll
```

But keep the actual UI much cleaner.

Prefer:

```text
        ↓
```

or a small double-chevron:

```text
        ˅
```

with a subtle animation.

---

## 2. POSITION

The indicator must be:

**Bottom-center of the modal**

Not at the bottom of the browser window.

Not outside the modal.

Not inside the project image.

It should visually sit over/near the bottom edge of the scrollable content area.

Example:

```text
┌───────────────────────────────┐
│                               │
│       PROJECT IMAGE           │
│                               │
├───────────────────────────────┤
│                               │
│  Project Title                │
│                               │
│  Description                  │
│                               │
│  Overview                     │
│  More content below...        │
│                               │
│              ↓                │
└───────────────────────────────┘
```

The indicator should make it immediately obvious that more content exists below.

---

## 3. ANIMATION

The arrow should have a very subtle continuous animation.

Recommended behavior:

```text
opacity: 0.5 → 1 → 0.5

translateY:
0px → 5px → 0px
```

Loop continuously.

The animation should feel like:

**"Scroll down"**

not like a notification or attention-grabbing advertisement.

Keep it slow and smooth.

Suggested duration:

```text
1.4s – 1.8s
```

with:

```text
ease-in-out
infinite
```

---

## 4. USE A CHEVRON / ARROW

Use a clean icon from the icon library already used by the project.

For example:

```text
ChevronDown
```

or an equivalent existing icon.

Do NOT introduce a new icon library just for this.

The icon should be approximately:

```text
16px – 20px
```

Do not make it large.

---

## 5. ADD A SUBTLE BACKDROP / GRADIENT

Because the modal content may pass behind the indicator, add a very subtle bottom fade.

For example:

```text
transparent
        ↓
rgba(background, 0.95)
```

This creates a small visual fade at the bottom of the scrollable area.

The purpose is to communicate:

**content continues below**

without visually blocking the content.

Keep the gradient very subtle.

---

## 6. IMPORTANT: INDICATOR SHOULD ONLY APPEAR WHEN SCROLLING IS POSSIBLE

Do not show the indicator if the modal content fits entirely inside the viewport.

Logic should be:

```text
if scrollHeight > clientHeight:
    show scroll indicator
else:
    hide indicator
```

This is important.

The indicator should only exist when there is actually more content below.

---

## 7. HIDE IT WHEN THE USER SCROLLS DOWN

Once the user starts scrolling, gradually hide the indicator.

Example behavior:

### Modal opens

```text
           ↓
        animated
```

### User scrolls

```text
indicator fades out
```

### User returns to the top

```text
indicator fades back in
```

You can use a small threshold such as:

```text
scrollTop < 30px
```

to determine whether the user is still near the top.

---

## 8. SHOW IT AGAIN WHEN USER RETURNS TO TOP

If:

```text
scrollTop <= 30
```

show the animated indicator again.

If:

```text
scrollTop > 30
```

hide it.

This creates a natural UX cue without permanently occupying the interface.

---

## 9. DO NOT ADD TEXT

Do not add:

```text
Scroll down to see more
```

or:

```text
More details below
```

The animation should communicate this visually.

Keep the UI minimal.

---

## 10. OPTIONAL HOVER / INTERACTION

If appropriate, make the indicator slightly interactive.

When hovered:

```text
opacity: 1
```

The cursor can indicate that it is interactive.

Clicking it can smoothly scroll the modal down by approximately:

```text
150–250px
```

This is optional but recommended.

If implemented, use smooth scrolling.

---

## 11. MODAL SCROLLING MUST REMAIN INSIDE THE MODAL

Make sure the user is scrolling the **modal content**, not the page behind it.

The modal should continue using something similar to:

```css
max-height: 85vh;
overflow-y: auto;
```

The body/background should remain locked while the modal is open.

Do not change this behavior just to implement the indicator.

---

## 12. VISUAL STYLE

The indicator must match the existing portfolio.

Use:

* subtle blue accent
* thin stroke
* small size
* soft opacity
* smooth animation
* minimal visual weight

Do NOT use:

* bright glowing arrows
* large animated icons
* bouncing emojis
* oversized scroll graphics
* distracting text
* flashy animations

It should look like a deliberate part of the UI.

---

## 13. DESKTOP

Desktop placement:

```text
             ↓
        bottom-center
```

Keep approximately:

```text
bottom: 12px–18px
```

inside the scrollable modal area.

---

## 14. MOBILE

On mobile, make the indicator slightly smaller and keep it centered.

It must not overlap:

* important text
* buttons
* Live Demo
* GitHub
* close button

If the modal becomes a near-full-screen mobile sheet, position it relative to the modal's scroll container.

---

## 15. ACCESSIBILITY

Respect:

```text
prefers-reduced-motion
```

When reduced motion is enabled:

* remove the continuous animation
* keep the static downward chevron visible when scrolling is possible

Do not make the UX dependent on animation alone.

Also ensure sufficient contrast.

---

## 16. DO NOT REDESIGN THE MODAL

This is important.

Do NOT rebuild the modal.

Do NOT change:

* modal dimensions
* project image
* typography
* project content
* badges
* buttons
* colors
* overall layout

The only purpose of this change is to make the modal's scrollability obvious.

---

# FINAL UX

When the user opens a project, the experience should be:

```text
┌─────────────────────────────────────┐
│                              ×      │
│                                     │
│          PROJECT IMAGE              │
│                                     │
├─────────────────────────────────────┤
│                                     │
│  V2C — Voice to Code                │
│                                     │
│  Description...                     │
│                                     │
│  OVERVIEW                           │
│                                     │
│  Content continues below...         │
│                                     │
│                 ↓                   │
└─────────────────────────────────────┘
```

The animated chevron should immediately communicate:

**"There is more content below. Scroll."**

After the user scrolls:

```text
↓
fades out
```

When the user returns to the top:

```text
↓
fades back in
```

Implement this cleanly with the existing animation system and existing icon library.

Keep the interaction subtle, premium, and production-ready.
