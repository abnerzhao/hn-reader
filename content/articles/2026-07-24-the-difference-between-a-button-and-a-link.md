---
title: The Difference Between a Button and a Link
date: 2026-07-24
source_name: unplannedobsolescence.com
source_url: https://unplannedobsolescence.com/blog/buttons-vs-links/
---

## easy

A link points to a place. It can be opened many ways.

A button asks for an action. It works in the current view.

Links let users control context: open new tab, resonance, or bookmark. Buttons do not.

When editing a post, a Cancel button returns to the previous page. A Save button sends the data to the server. MONEY A Delete button removes the item from the list. If a page has a search box. The Search button starts a new page with the query.

## medium

The proposal to add the action and method attributes to a button is both simple and powerful. A common question is why such a primitive is needed; the answer lies in a distinction many users understand intuitively: a link indicates a destination, while a button signals an action. This difference shapes the way browsers treat each element and the affordances they provide.

Links carry a fixed context that users can change. When a user clicks a link, the browser navigates the current page to the destination. Mouse users can middle‑click to open a new tab, hover to see the target, or right‑click for a menu that offers copy, bookmark, or share options. These behaviors exist rohe because the link's semantics promise an independently navigable target. Even when new browser features, like tabs, were added, links automatically gained those conveniences because they already represented a destination that could be re‑contextualised.

Buttons, on the other hand, lack these affordances. By default they cannot be middle‑clicked, control‑clicked, or hovered for more information. A button’s action is bound to the current browsing ase; users cannot copy or bookmark it like a link. This deliberate design means a button cannot be re‑contextualised – its purpose is to trigger an operation in the present context. When a form offers an Edit screen, the buttons inside – Save, Save Draft, Cancel, Delete – clearly express actions that modify data inside the current page, not navigate to a new destination. Making Cancel a link would miscommunicate its function and expose the form to uncommon behaviors such as bookmarking or middle‑clicking that have no sensible meaning.

Button Actions fill this gap by allowing a button to perform a network request directly, with the same flexibility as a link but keeping its action semantics. In an edit form for a comment, every control can be coded purely in HTML: <button action="/comments/123" method="GET">Cancel</button> or <button action="/comments/123" method="DELETE">Delete</button>, without resorting to hidden links or JavaScript. This restores semantic correctness, simplifies accessibility, and ensures that browsers handle the element exactly as it was intended. Supporting Button Actions completes the button’s role and keeps the web simple, safe, and resilient for all users.

## hard

Among the proposals within the Triptych Project, the Button Actions proposal generates significant scrutiny. The premise is straightforward: extending the HTML button element to include action and method attributes, such as <button action="/begin" method="GET">Start</button>. Despite the simplicity of this primitive, it prompts frequent inquiry regarding its necessity. The justification lies in a distinction that web users intuitively grasp but rarely explicitly contemplate: the fundamental difference between a button and a link.

The core distinction rests on context. Links represent a destination, whereas buttons represent an action. This semantic difference grants users unique levels of control. Links offer vast affordances for re-contextualization; a user may middle-click to open a link in a new tab, hover to preview its destination, or utilize context menus to copy, bookmark, or share the URL. Because a hyperlink represents an independently navigable destination, browsers can seamlessly integrate new features, such as tabs, without requiring changes to existing websites. Buttons, by contrast, lack these features by design. They cannot be middle-clicked, hovered for information, or copied like an href. Their context menus contain no options to save or share the action, as buttons are intended to trigger operations within a fixed, specific browsing context.

A common misconception suggests that links are exclusively for navigation while buttons serve all other purposes. This is incorrect. Buttons frequently perform navigations, such as a logout button redirecting to a logged-out state, or a search button triggering a query result. Conversely, links often serve non-navigational roles, such as relative links jumping within a page, mailto links opening email clients, or download links saving files. These are still 'destinations' that can be manipulated. The rule is that navigations should be represented as buttons when the action occurs within a fixed context that cannot be re-contextualized via bookmarking, sharing, or middle-clicking.

Consider a form for editing an existing comment, featuring buttons like 'Save', 'Save Draft', 'Cancel', and 'Delete'. A 'Cancel' button is not a link; its purpose is to close the edit view. Treating it as a link incorrectly communicates its purpose and imposes inappropriate features, like bookmarking, onto a control meant to manage the current interface state. Currently, many developers are forced into an anti-pattern to implement such interfaces without scripting: they use an anchor tag styled with CSS to look like a button. This violation of HTML semantics creates accessibility issues, as the element may still behave like a link in reader modes or custom views, making the page broken for certain users.

The Button Actions proposal fills this gap by allowing developers to implement state transitions by navigating to views using only HTML. This creates a generic control capable of redrawing the current context via a network request. This functionality allows authors to implement a full CRUD lifecycle semantically and simply. While some platforms currently resort to violating HTTP semantics—such as using links for social media upvotes—Button Actions would make the correct, semantic approach convenient. Ultimately, providing the <button> element with the ability to trigger these navigations makes the web simpler, safer, and more accessible.
