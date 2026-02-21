# Vijay Munusamy - Portfolio Website

A modern React + TypeScript + Vite portfolio website with Google Analytics 4 integration for comprehensive event tracking and user engagement analytics.

## Tech Stack

- **React 19.1** - UI library
- **TypeScript** - Type-safe development
- **Vite 6.3** - Fast build tool with HMR
- **React GA4 2.1** - Google Analytics 4 integration
- **CSS Modules** - Scoped styling

## Features

- ✅ Responsive design with mobile-first approach
- ✅ Smooth section navigation with tracking
- ✅ Resume download with analytics
- ✅ Contact form with validation
- ✅ Social media links with tracking
- ✅ AI Assistant chatbot integration
- ✅ Comprehensive Google Analytics 4 event tracking

---

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

### Build

```bash
npm run build
```

Creates an optimized production build.

### Preview

```bash
npm run preview
```

Preview the production build locally.

### Lint

```bash
npm lint
```

Run ESLint to check code quality.

---

## Google Analytics 4 Integration

Complete event tracking implementation for user engagement analytics. All events are tracked in real-time and categorized under `engagement` for easy filtering.

### Setup Instructions

1. **Get Your Measurement ID**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Select your property
   - Go to Admin → Data Streams → Web
   - Copy your Measurement ID (starts with `G_`)

2. **Add Environment Variable**
   - Create a `.env` file in the root directory
   - Add your measurement ID:
   ```env
   VITE_GOOGLE_ANALYTICS_ID=G_XXXXXXXXXXXXXX
   ```

3. **Initialization**
   - Google Analytics is automatically initialized in `src/main.tsx`
   - Events are ready to track once you set the environment variable

### Tracked Events Overview

| Event | Location | Trigger | Label |
|-------|----------|---------|-------|
| `pageview` | `src/App.tsx` | Page load | Page path |
| `nav_click` | `src/components/header/index.tsx` | Nav button click | Section name |
| `resume_download` | `src/components/Resume/index.tsx` | Resume download | `resume_pdf` |
| `contact_form_submit` | `src/components/contact/index.tsx` | Form submission | `contact_form` |
| `social_link_click` | `src/components/footer/index.tsx` | Social link click | Platform name |

### Detailed Event Documentation

#### 1. **Page Landing Event**
Tracks every time a user visits your portfolio.
- **Event Type**: Page View
- **Trigger**: Automatically on page load
- **Location**: `src/App.tsx`

```typescript
ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
```

**Analytics View**: Reports → Pages and screens

---

#### 2. **Navigation Button Clicks**
Tracks clicks on the main navigation buttons.
- **Event Name**: `nav_click`
- **Category**: `engagement`
- **Trigger**: When user clicks About, Experience, Resume, or Contact buttons
- **Location**: `src/components/header/index.tsx`
- **Label Examples**: `about`, `experience`, `resume`, `contact`

```typescript
ReactGA.event({
  category: 'engagement',
  action: 'nav_click',
  label: 'about'  // or experience, resume, contact
})
```

**Use Case**: Understand which sections users are most interested in

**Analytics View**: Engagement → Events → nav_click

---

#### 3. **Resume Download**
Tracks when users download your resume.
- **Event Name**: `resume_download`
- **Category**: `engagement`
- **Label**: `resume_pdf`
- **Trigger**: When user clicks "Download Resume (PDF)" button
- **Location**: `src/components/Resume/index.tsx`

```typescript
ReactGA.event({
  category: 'engagement',
  action: 'resume_download',
  label: 'resume_pdf'
})
```

**Use Case**: Measure how many recruiters/visitors are interested in your experience

**Analytics View**: Engagement → Events → resume_download

---

#### 4. **Contact Form Submission**
Tracks successful contact form submissions.
- **Event Name**: `contact_form_submit`
- **Category**: `engagement`
- **Label**: `contact_form`
- **Trigger**: On successful form submission (after validation)
- **Location**: `src/components/contact/index.tsx`

```typescript
ReactGA.event({
  category: 'engagement',
  action: 'contact_form_submit',
  label: 'contact_form'
})
```

**Use Case**: Track inbound inquiries and lead generation

**Analytics View**: Engagement → Events → contact_form_submit

---

#### 5. **Social Media Link Clicks**
Tracks clicks on your social media profile links.
- **Event Name**: `social_link_click`
- **Category**: `engagement`
- **Trigger**: When user clicks LinkedIn, GitHub, or Twitter links
- **Location**: `src/components/footer/index.tsx`
- **Label Examples**: `linkedin`, `github`, `twitter`

```typescript
ReactGA.event({
  category: 'engagement',
  action: 'social_link_click',
  label: 'linkedin'  // or github, twitter
})
```

**Use Case**: Measure social media engagement and profile traffic

**Analytics View**: Engagement → Events → social_link_click

---

### Viewing Analytics Data

#### Real-Time Dashboard
1. Log in to [Google Analytics](https://analytics.google.com/)
2. Select your property
3. Navigate to **Real-time** → **Overview**
4. See live events as they happen

#### Events Report
1. Go to **Engagement** → **Events**
2. View all tracked events with counts and user details
3. Filter by specific event names to analyze patterns

#### Conversions (Optional Setup)
1. Go to **Data** → **Conversions**
2. Create conversion goals for key events:
   - Resume downloads
   - Contact form submissions
   - Resume page views
3. Track conversion rates and user paths

#### User Journey
1. Go to **Reports** → **Engagement**
2. View user flow and interaction patterns
3. Identify drop-off points and optimize accordingly

---

## Project Structure

```
src/
├── components/
│   ├── about/
│   │   ├── index.tsx
│   │   └── about.module.css
│   ├── contact/
│   │   ├── index.tsx
│   │   └── contact.module.css
│   ├── experience/
│   │   ├── index.tsx
│   │   └── experience.module.css
│   ├── footer/
│   │   ├── index.tsx
│   │   └── footer.module.css
│   ├── header/
│   │   ├── index.tsx
│   │   └── header.module.css
│   └── Resume/
│       ├── index.tsx
│       └── resume.module.css
├── assets/
│   └── fonts/
│       ├── Montserrat/
│       └── Poppins/
├── App.tsx
├── main.tsx
├── index.css
└── vite-env.d.ts
```

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Google Analytics 4 Measurement ID (Required for analytics tracking)
VITE_GOOGLE_ANALYTICS_ID=G_XXXXXXXXXXXXXX

# Pushover Integration (For contact form notifications)
VITE_PUSHOVER_APP_TOKEN=your_app_token
VITE_PUSHOVER_USER_KEY=your_user_key
```

### How to Get These Values

**Google Analytics ID:**
- Google Analytics → Admin → Data Streams → Web → Measurement ID

**Pushover Tokens:**
- Create account at [Pushover.net](https://pushover.net/)
- Get Application Token from registered application
- Get User Key from your account settings

---

## Analytics Best Practices

1. **Regular Monitoring**: Check analytics weekly to understand user behavior
2. **Identify Trends**: Look for patterns in which sections/downloads are most popular
3. **Optimize Content**: Adjust your portfolio based on user engagement data
4. **Set Goals**: Create conversion goals for key actions (resume download, form submission)
5. **Monitor Performance**: Track which traffic sources bring qualified visitors

---

## Troubleshooting

### Events Not Showing in Google Analytics

1. **Check Environment Variable**: Ensure `VITE_GOOGLE_ANALYTICS_ID` is correctly set
2. **Verify Measurement ID**: Make sure it starts with `G_`
3. **Check Real-time**: Events should appear in Real-time section within seconds
4. **Browser Console**: Check for any JavaScript errors
5. **Data Retention**: Give it a few minutes for data to appear in reports

### Missing Events

- Verify the component has ReactGA import
- Check the event parameters (category, action, label)
- Ensure Google Analytics is initialized before component mounts
- Check browser DevTools console for errors

---

## License

This project is personal and open source. Feel free to use it as a reference for your portfolio.

---

## Contact

For questions or feedback about this portfolio:
- Email: Contact form on portfolio
- LinkedIn: [linkedin.com/in/vijay-munusamy](https://www.linkedin.com/in/vijay-munusamy/)
- GitHub: [github.com/VijayMunusamy22](https://github.com/VijayMunusamy22)
- Twitter: [@IamVj022](https://x.com/IamVj022)
