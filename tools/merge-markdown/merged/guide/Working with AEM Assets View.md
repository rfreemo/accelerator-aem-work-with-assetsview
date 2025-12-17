---
title: Working with AEM Assets View
author: Rob Freeman
date: 12/17/2025
creator: Adobe Digital Learning Services
subject: Instructor Led Training
---
<img class="cover-page" src="/home/runner/workspace/cli/tools/merge-markdown/apl-theme/images/Adobe-logo.png" style="zoom:50%;" />
<div class="cover-page cover-text">
  <div class="type"> Activity Guide </div>
  <div class="title">Working with AEM Assets View</div>
  <div class="creator"> Adobe Digital Learning Services </div>
  <div class="lang"> <!--{courseLang}--> </div>
</div>

<div class="page-break"></div>

<div class="copyright">
©2025 Adobe. All rights reserved.
</br></br>
Working with AEM Assets View
</br></br>
If this guide is distributed with software that includes an end user agreement, this guide, as well as the software described in it, is furnished under license and may be used or copied only in accordance with the terms of such license. Except as permitted by any such license, no part of this guide may be reproduced, stored in a retrieval system, or transmitted, in any form or by any means, electronic, mechanical, recording, or otherwise, without the prior written permission of Adobe. Please note that the content in this guide is protected under copyright law even if it is not distributed with software that includes an end user license agreement.
</br></br>
The content of this guide is furnished for informational use only, is subject to change without notice, and should not be construed as a commitment by Adobe. Adobe assumes no responsibility or liability for any errors or inaccuracies that may appear in the informational content contained in this guide.
</br></br>
Please remember that existing artwork or images that you may want to include in your project may be protected under copyright law. The unauthorized incorporation of such material into your new work could be a violation of the rights of the copyright owner. Please be sure to obtain any permission required from the copyright owner.
</br></br>
Any references to company names in sample templates are for demonstration purposes only and are not intended to refer to any actual organization.
</br></br>
Adobe, the Adobe logo, Acrobat, the Creative Cloud logo, and the Adobe Marketing Cloud logo are either registered trademarks or trademarks of Adobe in the United States and/or other countries.
</br></br>
All other trademarks are the property of their respective owners.
</br></br>
Adobe, 345 Park Avenue, San Jose, California 95110, USA.
</br></br>
Notice to U.S. Government End Users. The Software and Documentation are “Commercial Items,” as that term is defined at 48 C.F.R. §2.101, consisting of “Commercial Computer Software” and “Commercial Computer Software Documentation,” as such terms are used in 48 C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable. Consistent with 48 C.F.R. §12.212 or 48 C.F.R. §§227.7202-1 through 227.7202-4, as applicable, the Commercial Computer Software and Commercial Computer Software Documentation are being licensed to U.S. Government end users (a) only as Commercial Items and (b) with only those rights as are granted to all other end users pursuant to the terms and conditions herein. Unpublished-rights reserved under the copyright laws of the United States. Adobe agrees to comply with all applicable equal opportunity laws including, if appropriate, the provisions of Executive Order 11246, as amended, Section 402 of the Vietnam Era Veterans Readjustment Assistance Act of 1974 (38 USC 4212), and Section 503 of the Rehabilitation Act of 1973, as amended, and the regulations at 41 CFR Parts 60-1 through 60-60, 60-250, and 60-741. The affirmative action clause and regulations contained in the preceding sentence shall be incorporated by reference.
</br></br></br></br>
<div class="last-updated">12/17/2025</div>
</div>
<div class="page-break"></div>

<div class="toc" >
<h2 id="course-contents">Contents</h2>
  <!-- START auto-update -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Module 1: Introduction to Assets View and Metadata](#module-1-introduction-to-assets-view-and-metadata)
  - [Activity 1-1: Upload and Edit in Assets View](#activity-1-1-upload-and-edit-in-assets-view)
    - [Create a folder and upload an image](#create-a-folder-and-upload-an-image)
    - [Use the Version Viewer](#use-the-version-viewer)
  - [Activity 1-2: Access Renditions](#activity-1-2-access-renditions)
    - [Explore Smart Crops and Renditions](#explore-smart-crops-and-renditions)
  - [Activity 1-3: Publish the Image](#activity-1-3-publish-the-image)
    - [Delete and Restore the image](#delete-and-restore-the-image)
- [Module 2: Metadata and Search](#module-2-metadata-and-search)
    - [Activity 2-1:  Access Metadata](#activity-2-1--access-metadata)
    - [Activity 2-2: Apply Metadata Forms](#activity-2-2-apply-metadata-forms)
    - [Activity 2-3:  Metadata challenge!](#activity-2-3--metadata-challenge)
    - [Activity 2-4: Search](#activity-2-4-search)
- [Module 3: Productivity](#module-3-productivity)
    - [Activity 3-1: My Workspace and Quick Access](#activity-3-1-my-workspace-and-quick-access)
    - [Activity 3-2: Use Notifications to Track Asset Activity](#activity-3-2-use-notifications-to-track-asset-activity)
    - [Activity 3-3: Insights and Reporting](#activity-3-3-insights-and-reporting)
    - [Activity 3-4: Collections](#activity-3-4-collections)
    - [Activity 3-5: Sharing links](#activity-3-5-sharing-links)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
  <!-- END auto-update -->
</div>
<div class="page-break"></div>


# Module 1: Introduction to Assets View and Metadata

#### Introduction

In this module, you will learn the basic usage of the Assets View interface by uploading and editing an image, then focus on metadata management.

#### Module Navigation

<!-- START do not remove -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Activity 1-1: Upload and Edit in Assets View](#activity-1-1-upload-and-edit-in-assets-view)
  - [Create a folder and upload an image](#create-a-folder-and-upload-an-image)
  - [Use the Version Viewer](#use-the-version-viewer)
- [Activity 1-2: Access Renditions](#activity-1-2-access-renditions)
  - [Explore Smart Crops and Renditions](#explore-smart-crops-and-renditions)
- [Activity 1-3: Publish the Image](#activity-1-3-publish-the-image)
  - [Delete and Restore the image](#delete-and-restore-the-image)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
[Return to Course Contents](#course-contents)
<!-- END do not remove -->

## Activity 1-1: Upload and Edit in Assets View

### Create a folder and upload an image

1. Open *Experience Manager Assets* from the chocolate bar menu.

2. Navigate to *Asset Management \> Assets \> WKND Shared \> English \> Training Assets* and use the **Create Folder** button to create a folder using your first name and an initial, if necessary, e.g., Rob*F*.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/image2.jpeg" width="400"/>

3. **Drag and drop** the exercise image from the *Exercise_Files* folder on to your newly created folder. The _Upload Files_ modal dialog appears.

4. Leave the checkbox *Publish to AEM and Dynamic Media* **unchecked** and click ***Upload*** (the image that has been created with a large amount of meta-data specifically for testing – feel free to keep a copy for your own tests!).

<img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/upload.png" width="357"/>

5. A green bar and success message is shown if the upload was successful, and a placeholder image should be shown shortly afterwards with a ***Processing*** label. The asset is being processed by AEM as a Cloud Service *Asset Microservices*. **Be patient** - this process can take more than a minute to complete.

    The UI will then automatically update and the label will change to ***new***.

6. Click the **ellipsis** (three dots) below the thumbnail of the image you just uploaded.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/image6.png" width="357"/>

7. Choose Edit. A limited version of **Adobe Express** will open. **Make any change** such as cropping your image.

8. Click **Save** As, then **Version**.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/image7.png" width="483"/>

9. Image processing starts, as happened when you first uploaded the image. Click the **back arrow** to the folder.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/image8.png" width="244"/>

10. While the image is processing, take some time to look at others parts of the UI, such as the configurable _My Workspace_ (new in Assets View) and tagging (essentially the same as the Admin UI, except no management features).

### Use the Version Viewer

1. Once processing has completed, **double-click on the asset** to open it and click the 'Versions' (clock) icon in the right toolbar.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/image9.png" width="321"/>

2. Select a previous version (the original).  The image area nows shows the side-by-side comparison tool.  Use this to inspect the changes made in Adobe Express.

3. Click **Make Latest** to restore the original version.

## Activity 1-2: Access Renditions

### Explore Smart Crops and Renditions

> The training environment has Dynamic Media features. Dynamic Media is a separate licensed product that adds advanced asset handling features to Experience Manager.  
> As a result Dynamic Renditions and [Smart Crops](https://experienceleague.adobe.com/en/docs/experience-manager-learn/assets/dynamic-media/images/smart-crop-feature-video-use) are available.  See 

1. In the right hand menu (details area) you will find a list of Dynamic Renditions and Smart Crops. You can download a static version of the asset or, if the image is published, copy the URL using buttons below the renditions.

2. Use the **Switch View** link to change to the same image in the **Admin View**.  

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/switchview.png" width="321"/>

3. In the Admin View select **Renditions** from the left rail menu.

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/renditions.png" width="321"/>

The same are shown, including Dynamic Renditions and Smart Crops.  The renditions are being delivered from the Dynamic Media preview server.

4. Use the **Switch View** link to change back to the same image in the **Assets View**.

5. Click the back arrow, to the left of the image title to return to your folder.

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/image8.png" width="244"/>

## Activity 1-3: Publish the Image

1. Open the test image by double clicking on it.

2. Use the **Switch View** link to change to the same image in the **Admin View** ('traditional' Experience Manager).

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/switchview.png" width="321"/>

3. Once the image is open in the Admin View, copy the URL from the address bar.  This should be similar to below but thout the spaces between URL segments.

   ```
   https://author-p123456-e123456.adobeaemcloud.com  /ui#/aem/assets.html  /content/dam/wknd-shared/en/Training%20Assets/yourfolder/landscape_image_metadata_test.jpg  ?appId=aemshell
   ```
4. Construct the URL for the image on the Experience Manager publish server by replacing the word **author** with **publish**, and removing the the elements _/ui#/aem/assets.html_ (this is the editing interface) and _?appId=aemshell_, giving you a URL like this:

   ```
   https://publish-p123456-e123456.adobeaemcloud.com/content/dam/wknd-shared/en/Training%20Assets/yourfolder/landscape_image_metadata_test.jpg
   ```
5. In a new tab or window navigate to the new URL in your browser address bar (new tab or window) and you should get a **Not Found** error.  This is because the image has not been published (if you do see the image at this point, you may have published it by mistake when uploading).

6. In the Experience Manager editor use the **switch view** to move from Admin View back to Assets View.

7. Navigate to the containing folder (_Training Assets_, select the image and click **publish** in the blue actions bar.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/publish.png" width="321"/>

8. Select the _AEM_ checkbox in the modal dialog and **publish**.  A green notification panel will confirm that the image was published.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/publish_modal.png" width="240"/>

9. Once again enter the publish instance URL for the image in a new tab (the URL is **similar** to below).  This time there will be no _Not Found_ error and the published image will either open, or download.

   ```
   https://publish-p123456-e123456.adobeaemcloud.com/content/dam/wknd-shared/en/Training%20Assets/yourfolder/landscape_image_metadata_test.jpg
   ```

10. Open the details panel of the test image and scroll to the bottom of the panel.  Note that the publish state and publishing time of the asset is shown.

    <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/publishdata.png" width="321"/>

      > The publish mechanism creates a copy of the asset on the Experience Manager publish server, and optionally 
      > to the Dynamic Media delivery server.  
      > Until the release of the latest generation of AEM Assets tools (ca. 2024), this was the standard way to make images
      > available for use by asset consumers, or for use in Experience Manager (Sites) web pages.
      > 
      > We do not **approve** images in this exercise as we are not using one of the new delivery channels (Content Hub or the Dynamic Media API).
      > Approval is a metadata field that only becomes relevant when using these systems.

### Delete and Restore the image

1. Navigate to your folder and use the ellipsis menu to delete your test image, clicking first on the **delete** button in the menu, then again on the delete button in the modal confirmation layer.  The image is removed from the UI.

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/delete_image.png" width="240"/>

   > In the Admin View (Touch UI) this is a final operation.  Without the restoration of a backup this cannot be undone.
   > Assets View is different and has a Trash folder. Images deleted using Assets View can be restored. 

2. As only asset and folder titles are visible in the Trash tile view, it can be difficult to find an image if there are others, as is likely the case if your fellow students hsve also deleted their test images.  To overcome this, change to the **list view** as shown below:

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/trash_tileview.png" width="550"/>

3. Locate your deleted image, click the ellipsis and then **restore**.

    <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m1-introduction/assets/restore_image.png" width="220"/>

4. Check your folder to be sure that the image was restored.




# Module 2: Metadata and Search

#### Introduction

In this module, you will:
- learn how asset metadata is accessed in the user interface
- learn how to configure the available metadata fields
- use the search mechanism
- understand search mechanism configuration

#### Module Navigation

<!-- START do not remove -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Activity 2-1:  Access Metadata](#activity-2-1--access-metadata)
- [Activity 2-2: Apply Metadata Forms](#activity-2-2-apply-metadata-forms)
- [Activity 2-3:  Metadata challenge!](#activity-2-3--metadata-challenge)
- [Activity 2-4: Search](#activity-2-4-search)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
[Return to Course Contents](#course-contents)
<!-- END do not remove -->

### Activity 2-1:  Access Metadata

1. In the Assets View UI click the information icon in the details panel, inspect the **metadata** in the *Basic* and *Advanced* tabs.  The fields are the defaults provided by Adobe.

2. The image has much more metadata that you do not currently see.  You can see **some** of this 'hidden' metadata by downloading the image and inspecting it on your computer (seeing **all** metadata is beyond the scope of the exercise)
   - In MacOS right-click on the image and click on **Get info** (result as in the screenshot below)
   - In Windows 11, right-click, then choose **Properties**, then **Details**.

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m2-metadata_search/assets/metadata.png" width="400"/>

   > The reason you only see part of the metadata is because Adobe, and the system administrator, have applied **Metadata Forms**, so defining which metadata fields are visible and editable in the Assets View user interface (these Metadata Forms are the equivalent of Metadata Schemas in Admin View).
   > By changing the Metadata Forms applied to folders and MIME types, different metadata can be shown and edited, as required for the asset management in your company.

### Activity 2-2: Apply Metadata Forms

1. From the left menu, select **Settings** > **Metadata Forms**. You may see an empty page if only the default configurations are used as these defaults are invisible in the UI. You can see the defaults by either:

    - View the metadata in the details of an asset as we did in the previous
      exercise.

    - Create a new form using an existing form structure as the template.  Although this is **normally a power user or administrator responsibility**, we'll do that now:

2. In the Metadata Forms panel, click **Create**, then enter *\<your initials\>_default* in the Name field of **Create Metadata Form** panel, eg., _js_default_.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m2-metadata_search/assets/new_form.png" width="245"/>  

   (if you were to name the new form _default_ you would override the standard default form - **DON'T do that** in this exercise. The default is applied to any assets that do not have forms specific to their MIME types).

3. Select the **checkbox** *use existing form structure as template* and the select *default* in the **Choose from** field. Click **Create**.

4. The Metadata Form Editor is loaded. The fields shown are copied from the standard *default* form.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m2-metadata_search/assets/image17.png" width="602"/>  

5. We will make the metadata property _photoshop:City_ visible and editable in Assets View (photoshop:City is an Adobe metadata field that could conceivably be important for your company, as the location where the image was created or edited, however we are using it merely as an example without a defined use-case!).  Add a single-line text field to the bottom of the form, then configure the form using:

   - Metadata property: City (photoshop:City)
   - Label: Photoshop City

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m2-metadata_search/assets/metadatacity.png" width="602"/>

6. Click **Save**, wait for a success message, then **Close** to exit the form editor.

7. As your form is named neither *default* nor a MIME type, it will not be used anywhere yet.

8. Now assign your form to your folder in Training Assets by clicking **Assign to Folders** in the blue header bar, then selecting **your folder** and clicking **Assign**.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m2-metadata_search/assets/assign.png" width="602"/>

9. Open your training asset detail. Your modified metadata form has been applied and the field Photoshop City should now be visible, contain _Offenburg_ and be editable.  

10. Return to your folder and upload in to your folder the **test.pdf** file in your Exercise_Files.

11. After the asset has been processed open the details view and note that your **custom metadata form** is being used, This may not be desirable as a PDF is a different MIME type to an image, and by default has a different, PDF specifc, metadata form than an image.  An example issue us that photoshop:City is irrelevant for a PDF.

### Activity 2-3:  Metadata challenge! 

1. Solve this problem of the PDF file having the metadata configuration of an image.  Your PDF and your Image should be able to exist inside your folder or child-folder(s), but with different, MIME-type appropriate, metadata fields.  The PDF should have the default PDF metadata visible, and the image should have your custom metadata visible.

   > Hints:
   > - The name of the default Metadata Form for a PDF form is _application_. 
   > - Key point: you cannot apply multiple Metadata Forms to a folder.

### Activity 2-4: Search

1. Click on the search icon at the top of the left panel.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m2-metadata_search/assets/global_search.png" width="351"/>

2. Search for _Lake_ to view a selection of results.  Note that you searched the entire DAM.  When the results are shown you can filter by path, but it is a secondary action.

3. Click the back arrow (ideally in Assets View, not the browser back button).

4. If not already enabled, enabled the contextual search functionality using the toggle to the right of the search field.

   <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m2-metadata_search/assets/search_toggle.png" width="351"/>

5. Enter _images of a lake uploaded in the last week_

6. You will see fewer images and a _Create Date_ search filter has been automatically added to the header search bar.  This is the result of the natural language search - creation of search filters.

7. Experiment with natural language searches to explore the limits of the contextual search.   

   > It is possible to add a custom filter to the search, for example the photoshop:City.  We will not do this as it is a central configuration that we cannot change without conflict on the training system.  In reality it will be managed by an administrator, or power user. You should just remember that configuration of search filters is possible, and straight-forward in most cases.




# Module 3: Productivity

#### Introduction

In this module, you’ll explore productivity tools available in **Assets View** that make everyday asset management easier — including personalization, notifications, insights, collections, and sharing.

#### Module Navigation

<!-- START do not remove -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Activity 3-1: My Workspace and Quick Access](#activity-3-1-my-workspace-and-quick-access)
- [Activity 3-2: Use Notifications to Track Asset Activity](#activity-3-2-use-notifications-to-track-asset-activity)
- [Activity 3-3: Insights and Reporting](#activity-3-3-insights-and-reporting)
- [Activity 3-4: Collections](#activity-3-4-collections)
- [Activity 3-5: Sharing links](#activity-3-5-sharing-links)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
[Return to Course Contents](#course-contents)
<!-- END do not remove -->

### Activity 3-1: My Workspace and Quick Access

The **My Workspace > Quick Assets** panel in Assets View gives you quick access to the assets and folders you use most frequently. You can “pin” items to this view so they are always visible when you sign in.

1. From the left navigation, select **My Workspace** to open your personalized workspace.  Notice the _Quick Access_ panel, which will probably be empty.

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m3-productivity/assets/myworkspace.png" width="200"/>

2. Now navigate to **Assets > WKND Shared > English > Activities**

   > You may still be in the List view from a previous exercise.  To make your system look like the screenshots, you can return to Grid View, use the view switcher (top right of the main panel) 

3. Hover over the *hiking* folder tile, click the **ellipsis (⋮)** icon, and select **Pin to Quick Access**.

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m3-productivity/assets/pin_folder_menu.png" width="480"/>

4. A modal dialog appears with multiple options.  Select **For Myself**.

5. In the green confirmation message choose **view** or navigate to **My Workspace** as before. The *hiking* folder now appears as a pinned item in the _Quick Access -> My pinned items_ tab.  Had you chosen to pin for a group or organization in the previous step, the folder would instead show in the _Shared Items_ tab.

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m3-productivity/assets/my_pinned_items.png" width="320"/>

6. Click on the **ellipsis (⋮)** in your pinned item and click **Open in a new tab**. 

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m3-productivity/assets/open_pinned_item.png" width="420"/>

7. The *hiking* folder opens.  Click the **ellipsis (⋮)** under an image you like and choose **Pin to Quick Access**, in the same way that you added a folder in a previous step.

8. Once again choose to pin **For Myself** and then view the results in your Quick Access area (_My Workspace > Quick Access_).

> 💡 *Pinning assets "For Myself" is similar to the “lightbox” functionality of the older Admin View assets interface*

### Activity 3-2: Use Notifications to Track Asset Activity

You can receive notifications whenever assets you care about are updated, published, or have metadata changes.  
Here you’ll _watch_ a folder, then trigger a notification later when we publish an updated image.

1. Navigate to the *Training Assets* folder.

2. (Tip:  Read the next step before completing this one!) Select your folder (for example, *RobF*) and in the blue actions bar choose **Watch**.  If you don't see the _Watch_ link, show hidden items by clicking the ellipsis at the and of the bar a shown in the screenshot below.
   
      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m3-productivity/assets/watch.png" width="480"/>
   
3. A green confirmation message will be shown when the _watch_ has been successfully created.  Note that a link to your **Notification Preferences** is shown in the success message.  Click on this.  If the message is no longer visible, you can **unwatch** and **watch** again.

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m3-productivity/assets/watch_notification.png" width="480"/>

4. In the **Notifications -> Assets** area of the preferences page, ensure that all items are set to **In-app**.  

      <img alt="screenshot of exercise" src="/home/runner/workspace/cli/modules/m3-productivity/assets/xc_notifications.png" width="380"/>

5. Close the tab containing the notifications settings, so returning to the Assets View UI.

6. Click the **Watched Assets** link in the left menu bar.  Select the watched folder to see a list of your watches.

      <img alt="watched assets" src="/home/runner/workspace/cli/modules/m3-productivity/assets/watched_assets.png" width="220"/>

> 🔔 We’ll trigger this subscription later when you publish or edit assets in a later module.

### Activity 3-3: Insights and Reporting

#### View Asset Insights

Assets View provides automatically generated insights that show how assets are being used over time.
These insights are available at a global level and help authors understand overall asset usage trends.

In this activity, you’ll open the Insights view and review the available charts.

1. From the left navigation pane, click the Insights *graph icon*.

      <img alt="watched assets" src="/home/runner/workspace/cli/modules/m3-productivity/assets/insights.png" width="220"/>

   The Insights page opens, displaying automatically generated charts based on asset usage.

2. Review the available charts.

3. Use the time range dropdowns to explore how asset activity changes over time.

> Insights provide authors with a simple high-level, read-only view of asset usage without running reports or modifying content.

### Activity 3-4: Collections

#### Create and add assets to a collection

Collections let you group related assets — for example, all images you plan to use in an upcoming campaign — without moving the original files.

1. We'll start by creating an empty Collection.  Click on the Collections icon in the sidebar, then **Create a Collection**.  Give you collection a simple name susch as _your-initials-_Collection, select the **private** open and click **Create**.

      <img alt="" src="/home/runner/workspace/cli/modules/m3-productivity/assets/create_collection.png" width="420"/>

2. From the *WKND Shared > English > Activities* folder, find three images that you like, and for each:

   - Click **Add to Collection** in the blue action menu bar, then choose your Collection and click **Add**.  A confirmation message is shown and the Collection modal closes.

      <img alt="" src="/home/runner/workspace/cli/modules/m3-productivity/assets/add-to-collection2.png" width="420"/>
   
   > You can also use an Asset's ellipsis menu to _Add to Collection_.
   
3. Navigate again to **Collections**.You see your chosen images.

>  Note that the images are **not** copies of the originals.  The collection is a kind of virtual folder containing only references to the original images.  For example you can delete a Collection without the contained images being deleted from the system.
> A collection is not as fully featured as a genuined folder.  For example a Collection cannot be used for bulk operations such as applying metadata, nor can a Metadata Form be applied to a Collection.

#### Investigate collection permissions

1. As you create a **private** collection, you can control the access rights to your collection.  To do this view your Collection in the Collections panel, and choose **Manage permissions** from the ellipsis menu.

      <img alt="" src="/home/runner/workspace/cli/modules/m3-productivity/assets/collections_permissions.png" width="240"/>

2. Note that you have automatically been added as the Collection owner.

      <img alt="" src="/home/runner/workspace/cli/modules/m3-productivity/assets/collections_permissions.png" width="240"/>

3. We won't apply and test permissions in this course, but if you're working with another student, feel free to experiment with the permissions system by assigning permissions to them.  To do this the next section, sharing, may come in useful!

### Activity 3-5: Sharing links

You can share a collection, folder or individual asset as a secure link — useful for review or external collaboration.

1. Choose your original test image and choose **Share link** from the ellipsis menu.

      <img alt="" src="/home/runner/workspace/cli/modules/m3-productivity/assets/share_link.png" width="240"/>

2. Copy the link from the link share dialog, and note that the link has a unique ID.  It is not just a simple path to the entity that you shared, and does have an expiry time which you can set at this point.
3. Open an incognito window, or a different browser in which you are **NOT logged in** with an Adobe account.  
4. Past the shared link into the address bar.  Notice the link is to an author URL such as: ```https://author-p123456-e123456.adobeaemcloud.com/linkshare.html?sh=_long_unique_id```, and all content on an author instance would normally require authentication.
5. Click return and see tha image is visible and can be downloaded by your simulated **unauthenticated user** in the Link Share viewer

      <img alt="" src="/home/runner/workspace/cli/modules/m3-productivity/assets/linkshare.png" width="340"/>


