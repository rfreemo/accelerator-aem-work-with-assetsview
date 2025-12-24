---
title: Instructor Guide notes
subtitle: Working with AEM Assets View
---

Last auto-generated 12/24/2025  by [merge-markdown](https://github.com/knennigtri/merge-markdown).

### Expected Environment Requests

Standard ADLS AEMaaCS MPaaS instance with enduser content.

### Permissions

Assign users to the Assets Power Users profile.
Assign users to the AEM Author ? profile

### Setup

- Install Dynamic Media.
- Create a folder _Training Assets_ in WKND Shared \> English
- Configure Smartcrops and a greyscale dynamic rendition (so students see these in the activities).
- In the Touch UI, assign your Dynamic Media smartcrop profile to Training Assets.
- Upload the test PDF from the activity files in to the Training Assets folder.

### Cleanup

If you have previously run the training on your instance:

**Clear notifications**. Delete your and any other folders in Training_Assets.  This will ensure that the student users do not have notifications set on your folder.

**Remove custom metadata forms**. As of Dec 25 there is a bug that can prevent deletion of metadata forms, even though Assets View gives a success notifcation.  If you can't delete via the UI, use CRX DE and delete them from _/content/dam/appdata/metadataforms_.

### Challenges

There are some minor 'challenges' in the activities file.  Solutions:

#### Activity:  Metadata challenge

Key is that the students cannot use a custom image-specific metadata profile with any folder that contains both PDFs and images.  They can do this by creating a separate PDF specific folder, so:

- **Ideal** (only one custom form): _Training Assets / rfreeman / images_ should be created and the custom form applied to this. A subfolder _Training Assets / rfreeman / documents_ should be created for PDFs and other documents, with no associated custom metadata form, so that the default _application_ metadata form is used.
**alternative** (more complex) If a subfolder is used for PDFs, while the parent _Training Assets / rfreeman_ still has the student's custom form applied, the subfolder will inherit the student's form from the parent.  However a PDF-specific custom form (using _application_ as the template) could be applied to the subfolder.  This would override the inherited form.  

#### Challenge:  Search image locations

The problem is that in the search results view, the content tree is not visible, and even in the List view you cannot see the folder path in the results.  The path is also not visible in the image details (assuming the default metadata form).

Two easy ways (as of Dec 25) are:
- click on the ellipsis of an image in the results and choose **Show file location**
- look at the URL in the browser address bar.

### Challenge: Being Smart!

There's nothing complex here, it's just not guided in the same way as the normal exercises.

At the end though is a "bonus question" - how to remove images from a Smart Collection.  Answer: basically you can't! The only way is to change the metadata/tags/name of unwanted images so that they don't show.  In most situations changing a source image in this way, for anyone but the librarion, would be **bad**! 
