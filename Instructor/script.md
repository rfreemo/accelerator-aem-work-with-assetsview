### Title Slide

Welcome, everyone.

My name is [Your Name], and I’ll be your guide for today’s session on the new Assets View in AEM Assets.


SHARE PRESENTATION

### Instructor: Introduction

Intro slide

### Legal...

Before we dive in, please note the important legal information presented here.

The content we'll cover is intended only for those enrolled in this training - so you!

Please do not record, reproduce, or share this material, including any URLs or account information.

Adobe makes every effort to provide accurate and up-to-date content, but always refer to the latest official documentation for any updates - Assets View is moving fast and it is very difficult for everyone - us included, to keep up.

Let's ensure we respect these guidelines throughout the course.

### Agenda READ

1. New Interfaces and Terminology
2. The Basics
3. Metadata and search
4. Access Control
5. Customization 
6. Insights
7. Takeaways and Questions

## Essential Knowledge

I'll start with the essential information needed to understand the 2025 Adobe assets landscape.  What _Assets View_, _Assets Essentials_ and _Admin View_ are, and a look at the future.

### The two UIs - Admin View and Assets View

Here you see the two user interfaces for managing assets in AEM: Admin View on the left, and Assets View on the right.

You may previously have known Admin View simply as AEM Assets—this is the classic Touch UI dashboard for managing your digital assets. Throughout today’s training, whenever we refer to the “Admin View,” we mean the familiar interface you’ve used in the past as AEM Assets.

Assets View is the new cloud-hosted, React-based interface, designed to be a streamlined and modern experience. It’s accessible from the Experience Cloud homepage, via the Experience Cloud header, or by switching from Admin View—as shown by the “switch” arrow on this slide.

Both interfaces connect you to the same repository of digital assets, including all your metadata and enterprise features like advanced access control. The difference is in the user experience and tools each offers.

While Assets View is rapidly evolving and gaining new capabilities every month, Admin View remains essential for tasks requiring deeper administrative controls and advanced management options. Both views share core features—such as uploading, searching, asset metadata management, and simplified access controls. At the same time, each has unique capabilities tailored for different user roles and requirements.

During this course, we’ll focus on the key differences that impact administrators and technical users. We won’t cover every feature exhaustively—instead, our goal is to help you use both views effectively side by side as AEM Assets continues to evolve.

A quick note: This is a fast-changing landscape! Since work on this course began in June, Assets View has received significant new features and updates nearly every month. Adobe Engineering, Consulting, and Solution Partners are working live with customers to discover requirements and deliver improvements—sometimes on the bleeding edge. What we cover today reflects the very latest release, but some features may change or expand by October and beyond.

If you need to keep up with every update, I strongly recommend monitoring the monthly release notes. And — if you’re actively working on an Assets View project and have real-world experiences, feedback, or issues your organization is addressing with Adobe, please feel free to share them during today’s session!

And before we move on, you may have noticed a cog icon next to the words Admin View, and an Assets Icon next to the Assets View.  I have added these to other slides in the presentation to remind you which View we are discussing at any point.  

### Assets and Assets Essentials - Clarification

Now another clarification about the new AEM Assets landscape.  You may have heard of Assets Essentials.  If you've ever looked at the documentation or interface, you may have been confused about Assets Essentials versus Assets.  I'd like to address that right at the start and be sure that you know which system we will be working with today.

As you can see the side-by-side screenshots of the two systems on the slide, full AEM Assets on the left, and Assets Essentials on the right, appear to be near identical, even though they have very different capabilities.

The key difference is in the backend.  AEM Assets View on the left is the new interface for a full AEM Assets program to which you have full access.  So enterprise level Assets management.

Assets Essentials on the right is also based on AEM, but it's a single production instance to which you have no access.  The result is a lightweight asset management system without the full enterprise features of AEM.

From the perspective of the assets contributors and consumers that use the systems, there may be little difference, but for an enterprise and its admins and power users, the systems meet different use cases and are very different.

In this course we are going to work with full AEM Assets, and will not consider essentials further.

### The Future

Where possible customers are encouraged to adopt Assets View for future-proofing.

New features and innovations — such as _Dynamic Media Templates_ for real-time personalization — are launching exclusively in Assets View. Also admin and configuration features will be added to Assets View as we move towards feature parity.

Product feedback on gaps or workflows is encouraged by Adobe and shapes ongoing development priorities.

Admin View (Touch UI) is still essential and continues to be supported. There is no end of life date.

The future of assets is in Assets View, with ContentHub as the asset distribution portal.

### What you'll Learn

In this course, you will:

- Learn how to use the essential functions of the new Assets View interface
- See what’s new in Assets View and how it differs from Admin View
- Work with metadata in Assets View, including editing and management tasks
- Configure permissions in both Assets View and Admin View
- Understand customization features for Assets View
- Understand the analytics and insights available in Assets View

And we will be do practical hands-on exercises for most of these points.

##  Is it for you

Read slide

## Concepts and Usage

Let’s take a moment to cover the fundamental concepts and usage of the two UIs, starting with Assets View.


### Quick Facts

Assets View is built with a modern, responsive UI that’s unified across staging and production environments—you just select the right repository when you sign in.

It’s available only in AEM as a Cloud Service. You cannot use Assets View with on-premise or managed service AEM.

For most users, adoption is straightforward—the UI is easy to learn and use right away. But there are some powerful, advanced capabilities designed specifically with power users in mind.

You don't have as many customization and configuration option as you do in assets view.  You have less access to the underlying code.

### Use Assets View when....

Use Assets View when 

- you want a marketer-friendly interface that makes collaboration, searching, and gaining insights simple.

- you need to quickly find, annotate, download, collect, and share assets—without extra steps.

- Take advantage of workspace insights, pinning, and notification features to stay organized and informed.

- If you’re applying or managing permissions at a basic level

- And if your asset workflow includes smart crop or Dynamic Media previews, you’ll find these built right in and easily accessible.

For creative, marketing, and business teams, Assets View supports efficient, intuitive asset management.

### Use Admin View when... 

Let’s look at when you’ll need to rely on Admin View.

If you’re configuring advanced digital asset management settings—like Dynamic Media processing, complex metadata schemas, or handling complex processing profiles and custom renditions—Admin View is required.

It’s your go-to for bulk operations, such as importing and exporting large sets of metadata, or when you need to assign granular permissions and manage detailed user roles.

For building and maintaining custom workflows, or for complex workflow models that support your business automation, Admin View offers the necessary tools and flexibility.

And when you need to generate comprehensive reports on asset activities or system status, these capabilities are part of Admin View.

In short, whenever your work calls for deep administrative control, technical configuration, or advanced integration, Admin View remains essential—even as Assets View takes on a more central role for day-to-day tasks.

### Search First: Meta-data instead of Folder structure

In Assets View, search and metadata filtering are the primary ways to discover assets.
Instead of relying on complicated folder structures, users start by entering keywords or applying filters — so search enabled by metadata is front and center in every workflow.

The search bar and filters are therefore always visible—it’s the main way users interact with assets.
Asset metadata like titles, tags, dates, and usage rights drive the results, ensuring you get what you need quickly.

Browsing folders is still possible, but it’s secondary; the interface encourages searching instead of clicking through folders.

Features like Smart Tags and AI-powered visual search work best when assets have rich metadata.

A meta-data first approach is scalable.  Using a folder structure to organize assets has practical limits in organizing large number of assets.

You don’t need to remember where a file lives—just describe what you need, and let the metadata guide you.

Summary:

Assets View is “search-first” because search isn’t just powerful—it’s the main method of finding, organizing, and working with assets. Metadata is the foundation, and search is the entryway.

### Approval and Publishing

In AEM Assets View, **publishing** and **approval** both play vital, but different, roles in how assets reach their audiences.

Publishing is what moves assets from the Author environment to AEM Publish, making them available on websites and portals such as Asset Share Commons. 

Approval status is a separate metadata step.   The approval dialog in AEM Assets View is shown in the screenshot on the right.

Setting an asset to "Approved" in Assets View helps maintain governance and content oversight.  The approval status is also accessible in the Admin View, but it is somewhat hidden in the metadata dialogs, not the core, high-profile feature that we see in Assets View.

However, for traditional AEM Publish and classic Dynamic Media, this approval field does not restrict access—any asset that is published will be available, regardless of approval status.

In the newer delivery models—like Content Hub and Dynamic Media Open API—approval status is required: only approved assets are exposed through those APIs and public endpoints.

So, while publishing is what controls visibility in classic AEM Publish and Dynamic Media, approval gating is enforced only for modern delivery servers and APIs.

### Dynamic Media Templates

Dynamic Media Templates are a capability exclusive to Assets View. You won’t find them in the classic Admin interface.

They allow organizations to scale creative output while maintaining brand consistency. A designer creates a master template once, linking certain elements—like text fields, colors, or image slots—to dynamic parameters.

Business users can then open the template in Assets View and generate their own on-brand variations. For example, a marketer can swap in new product shots, update a headline, or localize text for a region, all without touching Photoshop or Illustrator.

Because parameters are controlled in AEM, users can only edit what the designer intended. Fonts, layouts, and brand rules stay locked, so the output remains consistent while still supporting personalization and localization.

This dramatically reduces turnaround time for campaigns and ensures every asset variation stays on brand—at scale.

We won't go deeper in to templates today, and the takeaway for power users is just that the new feature is available in Assets View.

### Navigate to Assets View

DESCRIBE SLIDE

**Highlight**

Main Experience Manager Assets Link ——> Assets View (no configuration option, no direct link to Touch UI)

Don’t use Assets (the old asset share between Experience Cloud solutions, e.g. Target)Get to full touch UI via Experience Manager, or (next slide))

### Switch between Admin (Touch UI) and Assets View

DESCRIBE

### Activity 1.1 - Core Functionality

## Metadata

Let’s talk about metadata management in AEM Assets, and how it works differently depending on which UI you’re using.

### Metadata in AEM Assets

When assets are uploaded to AEM, metadata (such as XMP, IPTC, EXIF properties) is automatically extracted and stored in the repository, regardless of the interface used. However, the way metadata is viewed, managed, and edited differs depending on whether you use Assets View or Admin View.

Assets View displays and edits metadata through Metadata Forms—simple, user-friendly forms that control which fields appear in the Asset Details panel.

Admin View relies on robust Metadata Schemas, which offer administrators granular control over the metadata layout, field requirements, validation, and mapping in the Asset Properties dialog.

The underlying metadata is the same, but each UI provides a different way to manage and present this information.

Let's look in a bit more detail at both systems starting with Admin View.

### Admin View - Metadata Schemas

In Admin View, we use Metadata Schemas to control asset metadata. 

The screenshot shows a metadata schema being configured by an administrator for the basic tab of an asset metadata dialog. 

The admin can decide which fields are shown or required, add validation, and set layouts.

Schemas can be set for specific file types or folders and map metadata into the system.

All of this requires admin access, although some organizations may prefer this sort of configuration to be done by developers in your codebase.

### Assets View: Metadata Forms

Assets View uses Metadata Forms—these are easier to set up and edit, but have fewer options.

They control which fields appear for each file type or folder on asset detail pages.

You can’t add detailed validation or customize layouts much.

By default, users see the standard templates, but forms can now be assigned by folder for more flexibility.

Note that you have no access to the Assets View forms configuration other than through the UI.  These cannot be persisted in the codebase.

### Schemas vs Forms: Key Differences

THere’s a summary comparing the configuration of access to metadata in the two views, Admin View and Assets View.

I won't attempt read through the slide, but will give you some time to read through.  

-- pause --

We will come to a hands-on exercise shortly, and when we do that, you may want to use this slide as a reference if you have doubts about the differences.  Also it may be useful to you in the future.

### Metadata Storage

Regardless of which UI you use, all metadata actually lives in the same place: the AEM content repository, or JCR.

What you see in either Assets View or Admin View is really just a filtered view—a presentation layer.

No matter how an asset is uploaded—via Assets View, Admin View, an API, or integration—the metadata is written into the JCR.

So, if a metadata field doesn’t appear in your UI, it may still exist in the repository; it’s just not currently exposed in that view.

Understanding this is crucial for troubleshooting and for effective governance—UI configuration changes only affect what’s visible or editable to end users, not what’s stored behind the scenes.

Put another way - there is no synchronoization mechanism of metadate between systems as there is no need.  The metadata values are the same.

### Importing Schemas to Forms

A really helpful feature for organizations migrating to Assets View is the ability to import metadata schemas from Admin View and convert them into forms for use in Assets View.

This can smooth the transition between old and new interfaces and help maintain consistency, but it’s important to note that the imported form is disconnected from the original schema — there’s no ongoing sync or merge.

If you make changes to the source schema in Admin View, those changes will not automatically show up in the Assets View form.

Also, be mindful that importing a schema as a form called “default” will override the global form for all assets, unless there’s a specific MIME-type match.

So, use the import tool to accelerate adoption, but remember: maintenance and governance for imported forms is a separate, ongoing responsibility.

### Exercise 1.2: Explore Metadata Changes

### Exercise 1.3: Understand Metadata Forms

### Metadata Usage

Here are two examples of user roles and their use of metadata. 

We have a power user - administrator or librarian - who really needs access to fine detail about an asset.  He or she would normally make use of metadata in the Admin View UI, with the configuration of the detailed information implemented by metadata schemas.

Then an end user such as a marketer.  He or she normally uses the new Assets View UI and may need only need to use a limited set of metadata that will have been filtered to requirements using the Assets View metadata forms.

### Search Capbilities - Assets View

Assets View provides a rich set of search capabilities for everyday users. Beyond simple keyword lookups, it supports fuzzy search, Boolean logic, proximity queries, and wildcards. This means that typos, variations in spelling, and more complex combinations of terms can still return meaningful results. Suggestions also help guide users toward common or likely matches as they type.

A newer capability in Assets View is contextual search, where natural language input is translated into filters and search criteria automatically. For instance, a query such as “images of mountains uploaded in the last month” will create the appropriate search filters without the user needing to build a structured query.

What you cannot do in Assets View is introduce custom predicate-based searches, as these cannot be added in Metadata schemas. The old Admin View allows for highly specialized predicates and overlays, but this extensibility is not carried forward. Assets View balances power with simplicity, but at the cost of configurability.

Finally, Assets View applies AI-based ranking to search results, factoring in signals like smart tags and metadata relevance. This means results may be ordered differently than in Admin View, with AI prioritizing what it deems the most relevant to the user’s query.

### Metadata Summary

- Assets View uses forms, Admin View uses schemas
- Forms and schemas are UI filters, not data stores
- Same metadata exists regardless of UI
- Use the right tool for the right job - schemas for extensive Admin View UI access, and forms for lighter-weight Assets View access.

Questions?

## Access Control

Let’s turn now to permissions management in AEM Assets, which works a bit differently depending on the interface you use.

### Introduction to Permissions

Both Admin View and Assets View provide ways to manage who can access, edit, or share assets—but there are key differences and new features to be aware of, especially for those used to traditional folder-based ACLs.

A major innovation in Assets particularly relevant to Assets View is Metadata Driven Permissions, or MDDP, which allows you to break the link between asset location and access—moving towards a model where access is determined by asset metadata, not just where something is stored.

The two UIs share an underlying permissions system of AEM's repository, but you need to use care and governance when using the access control features in the UIs, as we will see in the exercises.

## Access Control Part 1 - Metadata Driven Permissions

Now let’s focus on metadata-driven permissions, a recent and innovative feature that’s changing how enterprise DAM administrators manage asset access, in both Assets and Admin View.

### Introduction to Metadata Driven Permissions

MDDP enforces access control based on metadata, instead of the traditional content structure.  

MDDP was released in late 2024 and currently available only for AEM as a Cloud Service, lets you define access rules based on metadata values set for each asset.

For example, you can specify that only assets with a certain status or category are visible to specific user groups, regardless of folder location.

MDDP works across both Admin View and Assets View, supporting a metadata-first approach to governance and facilitating more granular, automated control of digital content.  Despite not being an Assets-View-only innovation, it's included on this course as it is an enabler for the metadata first approach that is core to Assets View.

It’s become a best practice for enterprise-scale DAM environments with complex approval workflows or distributed teams.

### Use Case - Approved Asset Visibility

Let’s walk through a practical example of how Metadata Driven Permissions (MDDP) can be applied.

Objective: Ensure that non-privileged users only see assets that have been formally approved.

Metadata field: Access is based on the value of the dam:status field.

Contributor group: Members of this group will see assets only when dam:status = approved.

Effect: Any asset without that value is automatically hidden from contributors, no matter which folder it resides in.

This setup provides a simple, reliable safeguard: unapproved content is never visible to general users, while approved materials remain easy to find and use.

### Why Metadata Driven Permissions

Metadata-driven permissions go beyond a single scenario and unlock broader governance advantages:

Supports business rules – For example, “only show approved assets to external users,” or “limit region-specific content to local teams.” These rules are based on metadata values, not folder placement.

Enables automation-friendly governance – Because permissions follow metadata, they can be applied automatically as assets move through workflows, minimizing manual intervention.

Reduces reliance on brittle folder-level ACLs – Traditional access models tied to folder structures are hard to maintain at scale. MDDP decouples access from location, simplifying administration.

Improves scalability in large repositories – Permissions are evaluated at the point of access, making it easier to support thousands of users and millions of assets without rigid folder hierarchies.

Together, these benefits make MDDP a best practice for enterprise-scale DAM environments that need flexible, reliable, and future-proof governance.
### Demo 2.1: Setting Metadata Driven Permissions

As MDDP is set centrally for all users, we can’t do a hands on exercise on the same instance.

I’ll therefore demonstrated the configuration and effects of the system.  The Demo is in the exercise book so you can follow through, but please DON’T DO IT on the training instance.We will….(talk through slide)

- Add permissions for Contributors group:
- Deny read access to the Magazine folder 
- Allow read where dam:status = approved
- Login as contributor and verify Assets with "approved" status are visible and Others are hidden

### Access Control Part 2

Move on to look at folder prmissions

### Admin View Permissions

In Admin View, you can quickly set permissions directly from the folder’s Properties panel, using roles such as Viewer or Editor. This simplified model provides ease of management directly within the Assets interface itself.

The other AEM permissions related interfaces and capabilities are beyond the scope of this course – we will focus only on assets

### Assets View: Folder Permissions

Assets View similarly offers streamlined folder permissions directly accessible from the Assets toolbar. 

Though visually different, it mirrors Admin View in simplicity and role assignment, both ultimately affecting the same permissions system.

### Folder Permissions - Reliability and Governance Challenge

Admin View and Assets View in AEM offer similar permission management features, but each UI hides inherited or existing ACLs set with the other.

Changes made in one UI are not visually reflected in the other, even though both models ultimately apply and merge permissions at the repository level (effective permissions are calculated by AEM behind the scenes).

Editing folder permissions using both views can create governance confusion, since users from each interface are blind to the changes made via the other.

Example: An “Allow” rule set in Admin View will not show up as an explicit permission in Assets View, but is still effective.

Choose one UI and stick with it for all permission editing. 

Mixing will lead to lack of clarity and operational risk.

Finally, note that UI-edited ACLs are not stored in source control and will not be versioned or replicated between environments by default.

This breaks standard development and QA flows, unless custom code/processes are implemented to package and move ACLs between environments.

### Activity 2.2: Folder Permissions Management

This exercise shows how both UIs can affect the same folder, but don’t always reflect each other’s changes. It drives home why consistency and governance are critical.

### Access Control in AEM Assets - Key Takeaways

READ

## Customization

Welcome to this section on UI customization in the new Assets View.

This is one of the more technical and evolving parts of AEM Assets, and it’s where the line between configuration and development becomes really important.

Today, we’ll explore what you can and can’t change, and where extensibility options come in.

### Extensibility Overview

Let’s explore how the new Assets View opens up extensibility options for power users and developers.

- Because the UI is built on a React-based framework, extensibility is now more agile and modern compared to traditional AEM customization.

- One of the key updates is the introduction of App Builder Extensions. With Adobe App Builder and the UI Extensibility SDK, developers can inject custom panels, actions, and even overlays directly into the Assets View.

- Some elements of the UI—such as widgets and overlays—can also be extended or customized via APIs, giving teams more flexibility for tailored user experiences.

- Integration with Adobe Workfront, Adobe Express, and eventually Content Hub is becoming deeper, through new workspace integration points, supporting truly connected content workflows.

Overall, these extensibility features let organizations adapt the DAM experience to their unique requirements—while staying within the guardrails of upgrade-safe, modular development.

### Extensibility - Limitations and Challenges

It’s important to recognize that while extensibility in Assets View is greatly improved, it also comes with new limitations and a few ongoing challenges.

First, the classic Granite overlays and admin-side plugins that you might use in Touch UI or older AEM environments aren’t supported here—so legacy customizations must be rethought.

Extension points are growing quickly, but not every use case is yet covered. Some bespoke workflows may still require hybrid solutions, using both Admin View and the new Assets View APIs.

Currently, there’s also no support for bulk workflow triggers or extensions within the Assets View interface.

A major challenge for enterprise customers is that many older, custom plugins or overlays must be rebuilt from scratch using the new React-based APIs, and full feature parity between Admin View and the new UI is still evolving.

So, while Assets View enables faster and safer extensibility, there’s a real need to plan migrations, manage technical debt, and coordinate across teams as you modernize your asset management solutions.

### Use case: "Download As" Panel

To illustrate what's possible with the extensibility options, let’s look at a recent real-world example: the “Download As” panel.

Many enterprise and marketing teams want the ability to download assets in specific file formats, sizes, or resolutions directly from the asset details screen. Out of the box, Assets View didn't support these advanced download options natively.

Using App Builder and the UI Extensibility SDK, our teams developed a custom panel that appears right within the asset’s detail view.

This panel allows users to select the desired file format—for example, JPEG or PNG—set the file size or DPI, and then trigger a download, all powered by the Dynamic Media APIs in the background.

It's fully modular and upgrade-safe, integrating seamlessly into the existing UI and respecting your site’s branding and theming.

This solution really highlights how the new extensibility framework allows you to deliver powerful, business-specific DAM tools while maintaining rapid upgrades and operational agility.

### Key Takeaways

Here are the key points for customizing Assets View:

- Assets View is designed for easy configuration with a limited set of options—most organizations can get started quickly, but there are boundaries to what’s possible out of the box.
- If you want advanced extensions or embedded custom panels, UI Extensibility unlocks significant power—but note that these capabilities require the Assets Ultimate license.
- For most teams, rapid, lightweight customizations—such as simple branding or small workflow tweaks—can be handled out of the box, without development.
- Finally, governance is critical. Extensions should be carefully planned and documented to ensure ongoing maintainability, compliance, and a seamless upgrade path.

## Insights

### Insights

Assets View includes a range of in-context analytics and insights tools designed to help users and DAM managers understand how their content is being used.

The __My Workspace__ dashboard gives each user a snapshot of recent activity—such as uploads, downloads, search queries, and tasks. At the asset level, you’ll find basic usage metrics within the details panel, including downloads and recent changes.

Users can subscribe to folders or assets to receive notifications about updates, helping them track changes or activity that affects their work.

Additionally, Insights and trends panels in the UI surface information like popular search terms and general usage patterns over time.

These analytics capabilities are being expanded and refined all the time. For the most up-to-date details or specialized reporting, I recommend checking the official AEM documentation.

### Limitation and Challenges

While Assets View offers helpful built-in insights, there are a few important limitations to be aware of.

First, custom analytics—such as configurable dashboards, downloadable reports, or extensive filtering—are not available within the Assets View UI. If your team needs advanced reporting or wants to export analytics, you’ll still need to use the classic Admin View or connect to external analytics tools.

Second, tracking asset usage on third-party platforms or customer-facing websites isn’t available out-of-the-box. This kind of external tracking is possible, but it requires separate integration work—embedding your own analytics code or using specialized tools outside of AEM.

For many teams, these constraints may not be an issue—but if you require complex reporting or external asset tracking, you’ll want to plan for additional setup or continue leveraging Admin View.

### Key Course Takeaways

- Assets View is a great addition to the AEM Assets ecosystem and evolving rapidly
- The same AEM repository and AEM asset processing is used for both Assets and Admin view
- Governance and cautious use of permissions management are important
- Metadata features are significantly different to those in the Admin View
- UI Configuration is restricted compared with Admin View
- Expect change!
