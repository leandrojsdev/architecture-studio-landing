# Google Tag Manager (GTM) & GA4 Setup Guide

This guide details the specific configuration required in Google Tag Manager and Google Analytics 4 to capture the custom events sent by this application.

## 1. Google Tag Manager (GTM) Configuration

### Step 1: Create Variables (Data Layer)
You need to tell GTM how to read the custom data we are pushing to the data layer.

1.  Go to **Variables** > **User-Defined Variables**.
2.  Click **New** > **Variable Configuration** > **Data Layer Variable**.
3.  Create the following variables:

| Variable Name (in GTM) | Data Layer Variable Name (from code) |
| :--- | :--- |
| `dlv - project_type` | `project_type` |
| `dlv - location` | `location` |
| `dlv - label` | `label` |
| `dlv - depth` | `depth` |
| `dlv - field` | `field` |
| `dlv - project_title` | `project_title` |
| `dlv - category` | `category` |
| `dlv - platform` | `platform` |

### Step 2: Create Triggers
You need a trigger to fire when these specific events occur.

1.  Go to **Triggers** > **New**.
2.  **Trigger Configuration** > **Custom Event**.
3.  **Event Name:** `cta_click|whatsapp_click|form_start|form_submit|scroll_depth|portfolio_click|social_click`
4.  Check **Use regex matching**.
5.  Name it: `CE - App Events`.

### Step 3: Create the Tag
This sends the event and its data to GA4.

1.  Go to **Tags** > **New**.
2.  **Tag Configuration** > **Google Analytics: GA4 Event**.
3.  **Configuration Tag:** Select your main GA4 Configuration Tag.
4.  **Event Name:** Click the brick icon and select `{{Event}}`.
5.  **Event Parameters:** Add a row for each piece of data you want to send:

| Parameter Name (to send to GA4) | Value (Select GTM Variable) |
| :--- | :--- |
| `project_type` | `{{dlv - project_type}}` |
| `location` | `{{dlv - location}}` |
| `label` | `{{dlv - label}}` |
| `depth` | `{{dlv - depth}}` |
| `field` | `{{dlv - field}}` |
| `project_title` | `{{dlv - project_title}}` |
| `category` | `{{dlv - category}}` |
| `platform` | `{{dlv - platform}}` |

6.  **Triggering:** Select the `CE - App Events` trigger created in Step 2.

## 2. Google Analytics 4 (GA4) Configuration

Even after GTM sends the data, GA4 won't show the parameters in reports unless you define them as Custom Dimensions.

1.  Go to **Admin** (bottom left gear icon).
2.  Under **Data display**, click **Custom definitions**.
3.  Click **Create custom dimension**.
4.  Create dimensions for each parameter:

| Dimension Name | Scope | Event Parameter | Description |
| :--- | :--- | :--- | :--- |
| Project Type | Event | `project_type` | The type of project selected in the lead form (e.g., Residential, Commercial). |
| Location | Event | `location` | The city entered by the user in the lead form. |
| Button Label | Event | `label` | Identifies which specific button was clicked (e.g., "inquire_hero", "view_collection_hero"). |
| Scroll Depth | Event | `depth` | The percentage of the page the user has scrolled (25%, 50%, 75%, 90%). |
| Form Field | Event | `field` | The name of the form field the user started interacting with (for abandonment tracking). |
| Project Title | Event | `project_title` | The title of the portfolio project card clicked. |
| Project Category | Event | `category` | The category of the portfolio project card clicked (e.g., Interior, Architecture). |
| Social Platform | Event | `platform` | The name of the social media platform link clicked in the footer. |

Once configured, data will start populating in your "Events" reports within 24-48 hours.
