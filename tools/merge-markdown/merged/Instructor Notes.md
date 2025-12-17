---
title: Instructor Guide notes
subtitle: Working with AEM Assets View
---

Last auto-generated 12/17/2025  by [merge-markdown](https://github.com/knennigtri/merge-markdown).

### Expected Environment Requests

You will need an AEMaaCS instance to support the media exercises.

### Shortfalls / prep needed

The exercises do not include the Apps and there is no demo script, so you will need to test these out and ideally give short demos

- [Import](https://da.live/apps/import): you can show this by importing the query index of WKND: https://main--wknd--hlxsites.hlx.live/query-index.json?limit=-1  . Note that this does not import all files, just the ones listed in the index, so you won't magically have a working weekend site to show, but it's good enough to demo the import process.

- [Bulk Operations](https://da.live/apps/bulk): Show operations dropdown (bottom right) and describe the need (e.g. bulk publishing not possible via normal UI / sidekick)

- [Snapshots](https://da.live/apps/snapshots): This is the biggest gap in the course.  Snapshots are complex compared to other authoring features and a demo will be significant effort. The presentation currently uses an 7 minute extract from a video from April 2025 https://www.youtube.com/watch?v=bJvQ0UfeHp8 (21:54). It's actually a nice way to introduce people to Chris Millar, a driving force behind DA, and that can be an excuse for using video!

### Setup

#### Setup Assets

- Set an environment config in AEM, via the Configuration tab for the instance in Cloudmanager.
- Environment Configuration: ``ADOBE_PROVIDED_CLIENT_ID | darkalley | All | Variable``.

![](/home/runner/workspace/cli/readme_assets/aemaacs_config.png)

#### Setup DA

- In not already done, create a Github **organisation** for your DA site, your vlab IMS Org, e.g. vlab17-emea.
- Similarly to other EDS exercises, create a public repo _da-getting-started_ using the template https://github.com/aemsites/da-block-collection
- Edit the fstab.yaml file and change the mount URL to ``https://content.da.live/<your github org>/da-getting-started/``
- Add your new repo to [AEM Code Sync](https://github.com/apps/aem-code-sync)
- Navigate to _https://da.live_, sign in (top right) and choose your Vlab Org
- Click _add new_ at the bottom right of the page
- Add your gihub URL to the _AEM Codebase_ text field, eg. ``https://github.com/<your github org>/da-getting-started``) and click _go_
- Highlight _AEM Block Collection_ and click _Make something wonderful_.
- Open your site, eg. ``https://da.live/#/vlab17-emea/da-getting-started`` and add a new folder _enablement_ at the top level.

> You will need to provide the URL of your DA site to your students.  Even though they will log in to the same VLab Org as you, they will not see your prepared site on da.live until they have already visited it once.

#### Connect DA to Assets

- Open ``https://da.live/config#/<your github user>/``
- Configure the key _aem.repositoryId_ with your author URL in the **data** sheet as shown below.  **Note: no https://** !

![](/home/runner/workspace/cli/readme_assets/da_assets_author.png)

#### Permissions

- In IMS, assign the group _AEM Assets Collaborator Users_ to your VLab users on your dev sandbox author.

### Other important notes:

- you can protect your site/org by creating a permissions sheet in your DA VLab Org and suitable user groups in IMS:
- The Org ID is found in the admin console URL, for example https://adminconsole.adobe.com/E15EA5EF56F25C847F000101@AdobeOrg. Two user groups have been created - da-admin and da-authors.  Your students should be added to da-authors.

![](/home/runner/workspace/cli/readme_assets/permissions_sheet.png)

