# Architecture Studio Landing

This is the landing page for the Architecture Studio project.

## Environment Variables

To configure the application, create a `.env.local` file in the root directory.

### Google Tag Manager (GTM)

To enable Google Tag Manager, add your GTM Container ID:

```bash
VITE_GTM_ID=GTM-XXXXXX
```

Replace `GTM-XXXXXX` with your actual Container ID.

### Contact Information

Configure the WhatsApp number and contact email for the lead capture form:

```bash
# WhatsApp Number (without + or spaces)
VITE_WHATSAPP_NUMBER=1234567890

# Contact Email for Inquiry Form
VITE_CONTACT_EMAIL=contact@latelier.com
```

## Analytics & Tracking Guide

We track high-value user actions to optimize the user experience and conversion rate. Below is a guide to the events tracked and how to interpret them.

### Tracked Events

| Event Name | Trigger | Properties | Purpose |
| :--- | :--- | :--- | :--- |
| `scroll_depth` | User scrolls past 25%, 50%, 75%, 90% | `depth`: "25%", "50%", etc. | Measure content engagement/consumption. |
| `cta_click` | User clicks a CTA button | `label`: "inquire_hero", "view_collection_hero", etc. | Measure intent to convert vs. browse. |
| `whatsapp_click` | User clicks "Contact via WhatsApp" | - | Measure high-intent direct contact. |
| `form_start` | User focuses on any form field | `field`: Field name (e.g., "name") | Measure initial interest in inquiring. |
| `form_submit` | User successfully submits the form | `project_type`, `location` | Measure final conversions (Leads). |
| `portfolio_click` | User clicks a project card | `project_title`, `category` | Identify popular project styles/types. |
| `social_click` | User clicks a footer social link | `platform`: "Instagram", etc. | Measure brand engagement off-site. |

### Key Metrics & Optimization

#### 1. Scroll Depth Retention
*   **Goal:** > 50% of users reaching 50% depth (Portfolio section).
*   **Optimization:** If drop-off is high before 50%, make the Hero section more compelling or shorten the text.

#### 2. Form Abandonment Rate
*   **Calculation:** `(form_start - form_submit) / form_start`
*   **Goal:** < 40% abandonment.
*   **Optimization:** If abandonment is high, the form might be too long. Consider removing fields (e.g., "City").

#### 3. Browse vs. Buy Ratio
*   **Calculation:** `view_collection_hero` clicks / `inquire_hero` clicks.
*   **Insight:** A high ratio means users are "window shopping." Ensure the Portfolio page has strong CTAs to capture them later.
