# 🎯 Super Admin Dashboard (Landing Page)

## Breadcrumb Navigation

```
🏠 Super Admin > Dashboard
```


***

## 📊 Dashboard Layout Structure

### **Section 1: Quick Stats Cards (Top Row)**

Four primary KPI cards with real-time metrics and trend indicators.

#### **Card 1: Total Companies/Tenants**

- **Primary Metric**: Total number of active companies (e.g., "47 Active Companies")
- **Secondary Metric**: Pending approvals (e.g., "+3 Pending")
- **Trend Indicator**: Month-over-month growth (e.g., "↑ 8.5% from last month")
- **Quick Action Button**: "View All Companies"
- **Visual**: Small area chart showing company growth trend (last 6 months)
- **Color Scheme**: Blue gradient (\#1565C0)


#### **Card 2: Total Active Licenses**

- **Primary Metric**: Active license count (e.g., "132 Active Licenses")
- **Secondary Metrics**:
    - Expiring soon (next 30 days): "8 Expiring Soon"
    - Inactive licenses: "5 Inactive"
- **Trend Indicator**: License utilization rate (e.g., "87% Utilization")
- **Quick Action Button**: "Manage Licenses"
- **Visual**: Donut chart showing license distribution (Active/Expiring/Inactive)
- **Color Scheme**: Green gradient (\#2E7D32)


#### **Card 3: System Health**

- **Primary Metric**: Overall health score (e.g., "98.5% Healthy")
- **Secondary Metrics**:
    - Server uptime: "99.9% Uptime"
    - API response time: "142ms Avg"
    - Database status: "Optimal"
- **Trend Indicator**: Health score trend (e.g., "↑ 2.1% improvement")
- **Quick Action Button**: "View Logs"
- **Visual**: Radial gauge showing health percentage
- **Color Scheme**: Purple gradient (\#7B1FA2)


#### **Card 4: Total Users**

- **Primary Metric**: Total system users across all companies (e.g., "2,847 Users")
- **Secondary Metrics**:
    - Active today: "1,234 Active"
    - New this month: "+87 New Users"
- **Trend Indicator**: User growth rate (e.g., "↑ 12.3% MoM")
- **Quick Action Button**: "User Management"
- **Visual**: Bar chart showing user distribution by role
- **Color Scheme**: Orange gradient (\#F57C00)

***

### **Section 2: System Overview (Middle Left - 60% Width)**

#### **2.1 Multi-Tenant Performance Dashboard**

**Title**: "Tenant Activity Overview"

**Components**:

- **Interactive Table** with sortable columns:
    - Company Name (with company logo thumbnail)
    - Industry Type (Automotive, Medical, Electronics, etc.)
    - License Type (Basic/Standard/Premium/Enterprise)
    - Active Users count
    - License Expiry Date (with color-coded warnings: red < 15 days, yellow < 30 days)
    - System Usage (%) - Progress bar visual
    - Last Activity (timestamp)
    - Status indicator (Active/Suspended/Inactive - color-coded badges)
    - Quick Actions: View Details | Edit | Suspend | Logs
- **Filters**:
    - Industry type dropdown
    - License type dropdown
    - Status dropdown
    - Date range picker
    - Search bar (company name, license key)
- **Pagination**: 10 items per page with page size selector

***

#### **2.2 Recent System Activities Log**

**Title**: "Recent System Activities"

**Components**:

- **Timeline View** with last 20 activities:
    - Timestamp (relative: "5 minutes ago")
    - Activity Type Icon (Login, License Update, Config Change, Error, etc.)
    - User/System identifier
    - Activity Description (e.g., "New company 'ABC Manufacturing' onboarded")
    - Affected Entity (Company name, user email, etc.)
    - Severity Badge (Info/Warning/Critical)
    - Quick Action: "View Details"
- **Filter Tabs**:
    - All Activities
    - User Activities
    - System Events
    - Security Alerts
    - Configuration Changes

***

### **Section 3: Analytics \& Insights (Middle Right - 40% Width)**

#### **3.1 License Distribution Chart**

**Title**: "License Distribution by Type"

**Chart Type**: Donut Chart

**Data Points**:

- Basic: 15 licenses (Blue)
- Standard: 45 licenses (Green)
- Premium: 38 licenses (Orange)
- Enterprise: 34 licenses (Purple)

**Additional Info**:

- Total Revenue indicator
- Most popular plan highlight
- Conversion rate (trial to paid)

***

#### **3.2 System Resource Utilization**

**Title**: "System Resource Utilization"

**Chart Type**: Multi-line Chart (Last 24 hours)

**Metrics**:

- CPU Usage (%) - Blue line
- Memory Usage (%) - Green line
- Disk Usage (%) - Orange line
- Network I/O (MB/s) - Purple line

**Alert Indicators**:

- Threshold lines at 80% (warning) and 95% (critical)
- Real-time refresh every 30 seconds

***

#### **3.3 User Activity Heatmap**

**Title**: "User Activity by Hour (Last 7 Days)"

**Chart Type**: Heatmap

**Visualization**:

- X-axis: 24 hours (0-23)
- Y-axis: Days of week (Mon-Sun)
- Color intensity: Number of active users (lighter = fewer, darker = more)

**Insights Box**:

- Peak usage time
- Average concurrent users
- Most active day

***

### **Section 4: Quick Actions Panel (Bottom Left)**

**Title**: "Quick Actions"

**Action Buttons** (Grid layout - 2x3):

1. **Onboard New Company** - Opens company registration wizard
2. **Generate System Report** - Opens report generation dialog
3. **Broadcast Notification** - Opens notification composer
4. **Backup Database** - Initiates manual backup
5. **Review Pending Approvals** - Shows pending items list
6. **Configure System Settings** - Navigate to system configuration

Each button includes:

- Icon
- Label
- Hover tooltip with description

***

### **Section 5: Alerts \& Notifications (Bottom Right)**

#### **5.1 Critical Alerts**

**Title**: "Critical Alerts"

**Components**:

- **Alert Cards** (last 5 critical items):
    - Alert icon (color-coded by severity)
    - Alert title
    - Alert message/description
    - Timestamp
    - Affected entity (company, user, system)
    - Action buttons: "Acknowledge" | "Resolve" | "View Details"

**Alert Types**:

- License expiring alerts (red)
- System performance warnings (yellow)
- Security breach attempts (red)
- Failed backup notifications (orange)
- Database connection issues (red)

***

#### **5.2 Upcoming License Renewals**

**Title**: "Upcoming License Renewals (Next 30 Days)"

**Components**:

- **List View** with 5 items:
    - Company name
    - License type
    - Expiry date (with countdown: "15 days remaining")
    - Auto-renewal status (On/Off toggle)
    - Quick actions: "Renew Now" | "Contact Company"

***

### **Section 6: System Statistics (Full Width Bottom)**

**Title**: "Platform Statistics Overview"

**Metrics Grid** (6 columns):

1. **Total API Calls Today**: 1.2M calls (+5.3% from yesterday)
2. **Database Size**: 478 GB (↑ 12 GB this week)
3. **Total IoT Devices**: 4,567 devices (across all companies)
4. **Average Response Time**: 142ms (↓ 8ms improvement)
5. **Storage Used**: 2.3 TB / 5 TB (46% utilization)
6. **Active Sessions**: 847 concurrent sessions

***

## 🎨 Dashboard Design Principles

### **Color Coding**

- **Green**: Healthy, active, good status
- **Yellow/Orange**: Warning, attention needed
- **Red**: Critical, urgent action required
- **Blue**: Information, neutral status
- **Purple**: Premium features, analytics


### **Refresh Options**

- **Auto-refresh**: Every 60 seconds (configurable)
- **Manual Refresh Button**: Top-right corner
- **Last Updated Timestamp**: Displayed at top-right


### **Responsive Behavior**

- Desktop: 3-column layout
- Tablet: 2-column layout
- Mobile: Single column stack

***

# 📋 Detailed Menu Specifications (Menu Items 1-6)


***

## **1. 📊 Dashboard**

### **Breadcrumb**:

```
🏠 Super Admin > Dashboard
```


### **Purpose**:

Central command center for Super Admin to monitor overall platform health, tenant activities, system performance, and critical metrics at a glance.[^1]

### **Content** (As detailed above):

All dashboard sections including:

- Quick Stats Cards
- Multi-Tenant Performance Dashboard
- Recent System Activities
- Analytics \& Insights
- Quick Actions Panel
- Alerts \& Notifications
- System Statistics


### **Key Features**:

- Real-time data refresh
- Customizable widget arrangement (drag-and-drop)
- Exportable dashboard views (PDF/Excel)
- Date range filters for historical analysis
- Drill-down capabilities to detailed views


### **User Interactions**:

- Click on any metric card to view detailed breakdown
- Hover on charts for data tooltips
- Click company names to navigate to company details
- Filter and search across all data tables
- Quick action buttons for common tasks

***

## **2. 🏭 Company Management**

### **Breadcrumb**:

```
🏠 Super Admin > Company Management
```


### **Purpose**:

Comprehensive tenant/company lifecycle management including onboarding, configuration, monitoring, and offboarding.[^1]

### **Main Page Layout**:

#### **Top Section: Overview Cards**

1. **Total Companies**: 47 Active
2. **Pending Onboarding**: 3 Requests
3. **Suspended Companies**: 2 Suspended
4. **Companies Added This Month**: +5 New

#### **Action Buttons** (Top Right):

- **+ Add New Company** (Primary button)
- **Bulk Import** (Excel/CSV upload)
- **Export Companies** (Excel/PDF)

***

### **Company List Table**

**Columns**:

- **Checkbox**: Bulk selection
- **Company Logo**: Thumbnail image
- **Company ID**: Unique identifier (e.g., COMP-001)
- **Company Name**: Clickable link to details
- **Industry Type**: Dropdown badge (Automotive, Medical, etc.)
- **Contact Person**: Name + Email
- **Phone Number**: Contact number
- **License Type**: Badge (Basic/Standard/Premium/Enterprise)
- **Active Users**: Count with view icon
- **Onboarded Date**: Date format
- **Last Activity**: Relative time (e.g., "2 hours ago")
- **Status**:
    - Active (green badge)
    - Inactive (gray badge)
    - Suspended (red badge)
    - Trial (yellow badge)
- **Actions**: Dropdown menu
    - View Details
    - Edit Company
    - Manage Users
    - View Licenses
    - Suspend/Activate
    - Clone Configuration
    - View Audit Logs
    - Delete Company (with confirmation)

**Filters \& Search**:

- Search bar: Company name, ID, contact person
- Filter by: Industry Type, License Type, Status, Date Range
- Sort by: Name, Date Added, Last Activity, User Count
- Advanced filters: User count range, license expiry date

**Bulk Actions**:

- Activate selected
- Suspend selected
- Send notification to selected
- Export selected
- Delete selected (with confirmation)

***

### **Add/Edit Company Modal**

**Form Sections**:

#### **Section 1: Basic Information**

- **Company Name**: Text input (required)
- **Company ID**: Auto-generated (display only) or manual input
- **Industry Type**: Dropdown (Automotive, Medical, Electronics, Food Processing, Pharma, etc.)
- **Company Logo**: Image upload (max 2MB, jpg/png)
- **Company Description**: Textarea (optional)


#### **Section 2: Contact Details**

- **Primary Contact Person**: Text input
- **Email Address**: Email input (required)
- **Phone Number**: Phone input with country code
- **Alternative Contact**: Text input (optional)
- **Alternative Email**: Email input (optional)
- **Company Address**: Textarea
- **City/State/Postal Code**: Text inputs
- **Country**: Dropdown


#### **Section 3: License Configuration**

- **License Type**: Dropdown (Basic/Standard/Premium/Enterprise)
- **License Start Date**: Date picker
- **License Duration**: Dropdown (1 month, 3 months, 6 months, 1 year, 2 years)
- **Auto-renewal**: Toggle (On/Off)
- **Feature Access**: Multi-select checkboxes
    - OEE Module
    - Energy Module
    - Machine Module
    - Reports Module
    - Inspection Module
    - Inventory Module
    - Maintenance Module
    - HR Module


#### **Section 4: User Limits \& Access**

- **Maximum Users**: Number input (based on license)
- **Maximum Devices**: Number input
- **Storage Limit**: Number input (GB)
- **API Call Limit**: Number input (calls/day)


#### **Section 5: Initial Configuration**

- **Timezone**: Dropdown
- **Date Format**: Dropdown (DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD)
- **Currency**: Dropdown (USD, EUR, INR, etc.)
- **Language**: Dropdown (English, Spanish, German, French, etc.)


#### **Section 6: Billing Information** (Optional)

- **Billing Contact Name**: Text input
- **Billing Email**: Email input
- **Billing Address**: Textarea
- **Payment Method**: Dropdown (Credit Card, Wire Transfer, Invoice)
- **Billing Cycle**: Dropdown (Monthly, Quarterly, Annually)

**Action Buttons**:

- **Save \& Activate**: Create company and activate immediately
- **Save as Draft**: Save without activation
- **Cancel**: Close modal without saving

***

### **Company Details Page**

**Breadcrumb**:

```
🏠 Super Admin > Company Management > [Company Name]
```

**Tab Navigation**:

#### **Tab 1: Overview**

- Company information display (read-only)
- Edit button to modify details
- Status change buttons (Activate/Suspend/Deactivate)
- Key metrics:
    - Total Users (with breakdown by role)
    - Active Devices
    - Storage Used (progress bar)
    - API Calls Today
    - Last Login Activity
- Quick Stats:
    - Total Machines
    - Total Products
    - Total Assets
    - Total Productions (this month)


#### **Tab 2: Users**

- User list table for this company
- Columns: User ID, Name, Email, Role, Status, Last Login, Actions
- Add User button
- Bulk import users
- Export users list
- User activity logs


#### **Tab 3: Licenses**

- Current active licenses
- License history
- Add/Renew license button
- Feature access matrix (checkboxes showing enabled/disabled features)
- Usage statistics per feature


#### **Tab 4: Configuration**

- System configuration settings specific to this company
- Menu structure customization
- Role permissions matrix
- Integration settings
- Notification preferences


#### **Tab 5: Activity Logs**

- Complete audit trail for this company
- Filters: Date range, Activity type, User
- Export logs
- Timeline view of all activities


#### **Tab 6: Analytics**

- Company-specific analytics dashboard
- User engagement metrics
- Feature adoption rates
- System usage patterns
- Performance metrics


#### **Tab 7: Billing History** (if applicable)

- Invoice list
- Payment history
- Upcoming renewals
- Outstanding payments
- Download invoices

***

## **3. 📜 License Management**

### **Breadcrumb**:

```
🏠 Super Admin > License Management
```


### **Purpose**:

Centralized license lifecycle management including creation, allocation, renewal, and revocation across all tenants.[^1]

### **Main Page Layout**:

#### **Top Section: Overview Cards**

1. **Total Active Licenses**: 132 Active
2. **Expiring This Month**: 8 Expiring
3. **Revenue This Month**: \$45,230
4. **License Utilization**: 87%

#### **Action Buttons** (Top Right):

- **+ Create New License** (Primary button)
- **Bulk Renew** (Batch renewal)
- **Generate License Report** (Excel/PDF)

***

### **License List Table**

**Columns**:

- **Checkbox**: Bulk selection
- **License ID**: Unique identifier (e.g., LIC-2025-001234)
- **Company Name**: Clickable link to company details
- **License Type**: Badge (Basic/Standard/Premium/Enterprise)
- **License Key**: Masked key with copy button (e.g., XXXX-XXXX-XXXX-AB12)
- **Status**:
    - Active (green)
    - Expired (red)
    - Suspended (orange)
    - Trial (yellow)
- **Start Date**: Date format
- **Expiry Date**: Date with color coding:
    - Red: < 15 days
    - Yellow: 15-30 days
    - Green: > 30 days
- **Days Remaining**: Countdown (e.g., "45 days")
- **Auto-Renewal**: Toggle indicator (On/Off)
- **Features Enabled**: Count with tooltip (e.g., "6/8 modules")
- **Price**: Monthly/Annual price
- **Actions**: Dropdown menu
    - View Details
    - Edit License
    - Renew License
    - Suspend License
    - Revoke License
    - Clone License
    - Send to Company
    - View History

**Filters \& Search**:

- Search bar: License ID, Company name, License key
- Filter by: License Type, Status, Expiry date range
- Sort by: Company name, Expiry date, Price, Status
- Advanced filters: Price range, Feature count, Auto-renewal status

**Bulk Actions**:

- Renew selected
- Suspend selected
- Send renewal reminders
- Export selected
- Generate invoices

***

### **License Type Configuration**

**Pre-defined Plans** (Editable):

#### **Plan 1: Basic**

- **Price**: \$99/month or \$990/year (save 17%)
- **Features**:
    - ✅ Up to 50 users
    - ✅ Up to 20 devices
    - ✅ 10 GB storage
    - ✅ OEE Module
    - ✅ Basic Reports
    - ✅ Email Support
    - ❌ Energy Module
    - ❌ Advanced Analytics
    - ❌ API Access
- **Description**: Perfect for small manufacturing setups


#### **Plan 2: Standard**

- **Price**: \$299/month or \$2,990/year (save 17%)
- **Features**:
    - ✅ Up to 200 users
    - ✅ Up to 100 devices
    - ✅ 50 GB storage
    - ✅ All Basic features
    - ✅ Energy Module
    - ✅ Machine Module
    - ✅ Advanced Reports
    - ✅ API Access (limited)
    - ✅ Phone Support
    - ❌ Custom Integrations
- **Description**: Ideal for growing manufacturing operations


#### **Plan 3: Premium**

- **Price**: \$799/month or \$7,990/year (save 17%)
- **Features**:
    - ✅ Up to 1000 users
    - ✅ Unlimited devices
    - ✅ 250 GB storage
    - ✅ All Standard features
    - ✅ All Modules (OEE, Energy, Machine, Inspection, Inventory, Maintenance, HR)
    - ✅ Custom Dashboards
    - ✅ Advanced Analytics
    - ✅ Full API Access
    - ✅ WhatsApp Integration
    - ✅ Priority Support
    - ❌ White-label option
- **Description**: Comprehensive solution for large enterprises


#### **Plan 4: Enterprise**

- **Price**: Custom pricing (contact sales)
- **Features**:
    - ✅ Unlimited users
    - ✅ Unlimited devices
    - ✅ Unlimited storage (or custom limit)
    - ✅ All Premium features
    - ✅ White-label option
    - ✅ Custom integrations
    - ✅ Dedicated server option
    - ✅ SLA guarantees
    - ✅ 24/7 dedicated support
    - ✅ On-premise deployment option
    - ✅ Custom development
- **Description**: Fully customizable for enterprise needs

**Plan Management Actions**:

- **Edit Plan**: Modify features, pricing, limits
- **Create Custom Plan**: Build plan from scratch
- **Clone Plan**: Duplicate existing plan and modify
- **Archive Plan**: Hide from active plans

***

### **Create/Edit License Modal**

**Form Sections**:

#### **Section 1: Company Selection**

- **Company**: Dropdown (searchable) - Select existing company
- **Company Info Display**: Show company details after selection


#### **Section 2: License Type**

- **License Plan**: Dropdown (Basic/Standard/Premium/Enterprise/Custom)
- **Billing Cycle**: Radio buttons (Monthly/Quarterly/Annually/Custom)
- **Price Override**: Number input (optional) - Override standard price


#### **Section 3: License Duration**

- **Start Date**: Date picker
- **Duration**: Dropdown (1 month, 3 months, 6 months, 1 year, 2 years, custom)
- **End Date**: Auto-calculated (display only) or manual date picker
- **Auto-Renewal**: Toggle (On/Off)
- **Renewal Reminder**: Number input (days before expiry to send reminder)


#### **Section 4: Feature Access Configuration**

**Module Access** (Checkboxes with descriptions):

- ☑ **OEE Module**: Overall Equipment Effectiveness monitoring
- ☑ **Energy Module**: Energy consumption tracking and analytics
- ☑ **Machine Module**: Machine monitoring and performance
- ☑ **Reports Module**: Comprehensive reporting capabilities
- ☐ **Inspection Module**: Quality inspection management
- ☐ **Inventory Module**: Inventory and asset management
- ☐ **Maintenance Module**: Maintenance scheduling and tracking
- ☐ **HR Module**: Human resource management

**System Limits** (Number inputs):

- **Max Users**: Number (default based on plan)
- **Max Devices**: Number (default based on plan)
- **Storage Limit (GB)**: Number (default based on plan)
- **API Calls/Day**: Number (default based on plan)


#### **Section 5: License Generation**

- **License Key Generation**:
    - Auto-generate (button)
    - Manual entry (text input)
- **License Key Preview**: Display generated key (e.g., EAGL-2025-ABCD-1234-EFGH)
- **Copy License Key**: Copy button


#### **Section 6: Additional Settings**

- **Trial Mode**: Toggle (if trial, set trial duration)
- **Grace Period**: Number input (days after expiry before suspension)
- **Send Welcome Email**: Checkbox (send license details to company email)
- **Notes**: Textarea (internal notes about this license)

**Action Buttons**:

- **Generate \& Activate**: Create and activate immediately
- **Generate as Draft**: Create without activation
- **Send to Company**: Generate and email to company
- **Cancel**: Close without saving

***

### **License Details Page**

**Breadcrumb**:

```
🏠 Super Admin > License Management > [License ID]
```

**Tab Navigation**:

#### **Tab 1: Overview**

- License information display (read-only with edit button)
- **License Status Card**:
    - Current status (Active/Expired/Suspended/Trial)
    - Days remaining countdown
    - Auto-renewal status
    - Last renewal date
- **Usage Statistics**:
    - Current user count vs. limit (progress bar)
    - Current device count vs. limit (progress bar)
    - Storage used vs. limit (progress bar)
    - API calls today vs. limit (progress bar)
- **Feature Access Matrix**:
    - Table showing all modules with enabled/disabled status
- **Quick Actions**:
    - Renew Now
    - Upgrade Plan
    - Suspend License
    - Download Certificate


#### **Tab 2: Renewal History**

- Table of all renewals for this license
- Columns: Renewal Date, Duration, Price, Payment Status, Renewed By, Invoice
- Export renewal history


#### **Tab 3: Usage Analytics**

- Charts showing:
    - User count trend (last 6 months)
    - Device count trend
    - Storage usage trend
    - API call volume trend
- Feature adoption metrics
- Most active users/devices


#### **Tab 4: Modifications Log**

- Audit trail of all changes to this license
- Columns: Timestamp, Modified By, Change Type, Old Value, New Value, Notes
- Filter by: Date range, Change type
- Export logs


#### **Tab 5: Notifications**

- List of all notifications sent related to this license
- Renewal reminders
- Expiry warnings
- Suspension notifications
- Upgrade suggestions
- Resend notification button

***

## **4. ⚙️ System Configuration**

### **Breadcrumb**:

```
🏠 Super Admin > System Configuration
```


### **Purpose**:

Centralized system-wide configuration management for application behavior, integrations, and global settings.[^1]

### **Main Page Layout**:

**Tab Navigation** (Vertical sidebar):

#### **Tab 1: General Settings**

**Section 1: Application Information**

- **Application Name**: Text input (e.g., "Eagle Analytics")
- **Application Version**: Display only (e.g., "v2.1.5")
- **Application Logo**: Image upload (displayed in login, header)
- **Favicon**: Icon upload (.ico file)
- **Company Name**: Text input (your company name)
- **Support Email**: Email input
- **Support Phone**: Phone input

**Section 2: Default System Settings**

- **Default Timezone**: Dropdown (all timezones)
- **Default Date Format**: Dropdown (DD/MM/YYYY, MM/DD/YYYY, YYYY-MM-DD)
- **Default Time Format**: Radio (12-hour, 24-hour)
- **Default Currency**: Dropdown (USD, EUR, INR, etc.)
- **Default Language**: Dropdown (English, Spanish, German, etc.)
- **Decimal Separator**: Radio (. or ,)
- **Thousand Separator**: Radio (, or . or space)

**Section 3: System Behavior**

- **Session Timeout**: Number input (minutes) - Default: 30
- **Login Attempts Limit**: Number input - Default: 5
- **Account Lockout Duration**: Number input (minutes) - Default: 30
- **Password Reset Expiry**: Number input (hours) - Default: 24
- **Token Expiry Duration**: Number input (minutes) - Default: 60
- **Refresh Token Expiry**: Number input (days) - Default: 7

**Save Changes** button at bottom

***

#### **Tab 2: Email Configuration**

**Section 1: SMTP Settings**

- **SMTP Host**: Text input (e.g., smtp.gmail.com)
- **SMTP Port**: Number input (e.g., 587)
- **Use SSL/TLS**: Toggle
- **SMTP Username**: Email input
- **SMTP Password**: Password input (masked)
- **From Email**: Email input (sender email)
- **From Name**: Text input (sender display name)
- **Test Email Button**: Send test email to verify configuration

**Section 2: Email Templates**

- **Template List** (expandable sections):
    - Welcome Email Template
    - Password Reset Template
    - License Expiry Warning Template
    - License Renewal Template
    - Invoice Email Template
    - System Alert Template
    - Custom Template (create new)

**Each Template Editor Includes**:

- **Subject Line**: Text input with variables ({{company_name}}, {{user_name}}, etc.)
- **Email Body**: Rich text editor with variables
- **Preview Button**: Show preview with sample data
- **Send Test Email**: Send to test address
- **Reset to Default**: Restore original template

**Section 3: Email Notifications**

- **Enable Email Notifications**: Master toggle
- **Notification Types** (individual toggles):
    - User registration notifications
    - License expiry warnings (15, 30 days before)
    - System alerts
    - Failed login attempts
    - Password change confirmations
    - Invoice generation
    - Backup completion/failure
    - Performance degradation alerts

**Save Changes** button

***

#### **Tab 3: SMS \& WhatsApp Configuration**

**Section 1: SMS Settings (Twilio)**

- **Enable SMS Notifications**: Toggle
- **Twilio Account SID**: Text input
- **Twilio Auth Token**: Password input (masked)
- **Twilio Phone Number**: Phone input
- **Test SMS Button**: Send test SMS

**Section 2: WhatsApp Settings (Twilio/Official API)**

- **Enable WhatsApp Notifications**: Toggle
- **WhatsApp Provider**: Dropdown (Twilio, Official API, Custom)
- **API Credentials**: Provider-specific fields
- **WhatsApp Phone Number**: Phone input
- **Test WhatsApp Button**: Send test message

**Section 3: Message Templates**

- **SMS Template Editor**: Similar to email templates
- **WhatsApp Template Editor**: With multimedia support
- **Variables Available**: {{company}}, {{user}}, {{license}}, {{date}}, etc.

**Section 4: Notification Preferences**

- **Notification Types** (checkboxes for SMS and WhatsApp):
    - License expiry warnings
    - Critical system alerts
    - Security alerts
    - Backup failures
    - Payment failures

**Save Changes** button

***

#### **Tab 4: Storage \& Backup Configuration**

**Section 1: File Storage Settings**

- **Storage Type**: Radio buttons
    - Local File System (default)
    - AWS S3
    - Azure Blob Storage
    - Google Cloud Storage
- **Storage Path**: Text input (for local) or bucket name (for cloud)
- **Max File Size**: Number input (MB) - Default: 50 MB
- **Allowed File Types**: Multi-select (Images, Documents, Videos, etc.)
- **Storage Limit per Company**: Number input (GB)

**Section 2: Backup Configuration**

- **Enable Automatic Backups**: Toggle
- **Backup Frequency**: Dropdown (Daily, Weekly, Monthly)
- **Backup Time**: Time picker (e.g., 02:00 AM)
- **Backup Retention**: Number input (days) - Keep backups for X days
- **Backup Location**: Text input (path or cloud bucket)
- **Include Files in Backup**: Checkbox (include uploaded files)
- **Notification on Completion**: Toggle
- **Notification on Failure**: Toggle

**Section 3: Backup Management**

- **Available Backups Table**:
    - Columns: Backup Date, Size, Duration, Status, Actions
    - Actions: Download, Restore, Delete
- **Manual Backup Button**: Initiate immediate backup
- **Last Backup**: Display timestamp and status

**Section 4: Database Maintenance**

- **Auto-Vacuum**: Toggle (PostgreSQL optimization)
- **Archive Old Data**: Toggle (move old data to archive tables)
- **Archive After**: Number input (months) - Default: 12 months
- **Data Retention Period**: Number input (years) - Default: 10 years

**Save Changes** button

***

#### **Tab 5: Security Settings**

**Section 1: Authentication Security**

- **Enable Multi-Factor Authentication (MFA)**: Toggle
- **MFA Methods**: Checkboxes
    - Email OTP
    - SMS OTP
    - Authenticator App (Google Authenticator, Microsoft Authenticator)
- **Force MFA for Super Admin**: Toggle
- **Force MFA for All Users**: Toggle

**Section 2: Password Policy**

- **Minimum Password Length**: Number input - Default: 8
- **Require Uppercase**: Toggle
- **Require Lowercase**: Toggle
- **Require Numbers**: Toggle
- **Require Special Characters**: Toggle
- **Password Expiry**: Number input (days) - 0 for no expiry
- **Prevent Password Reuse**: Number input (last X passwords)
- **Password Strength Meter**: Toggle (show on password fields)

**Section 3: Session Management**

- **Allow Concurrent Sessions**: Toggle
- **Max Concurrent Sessions per User**: Number input - Default: 3
- **Idle Session Timeout**: Number input (minutes) - Default: 30
- **Absolute Session Timeout**: Number input (hours) - Default: 12
- **Remember Me Duration**: Number input (days) - Default: 30

**Section 4: IP \& Access Control**

- **Enable IP Whitelisting**: Toggle
- **Whitelisted IPs**: Textarea (one IP per line or CIDR notation)
- **Enable IP Blacklisting**: Toggle
- **Blacklisted IPs**: Textarea
- **Block Suspicious Activities**: Toggle (auto-block based on behavior)

**Section 5: Data Encryption**

- **Encryption at Rest**: Display only (AES-256 - enabled by default)
- **Encryption in Transit**: Display only (TLS 1.3 - enabled by default)
- **Database Encryption**: Toggle
- **File Encryption**: Toggle (encrypt uploaded files)

**Section 6: Audit \& Compliance**

- **Enable Audit Logging**: Toggle (always on, display only)
- **Log Retention Period**: Number input (years) - Default: 5
- **GDPR Compliance Mode**: Toggle (enables data portability, right to deletion)
- **HIPAA Compliance Mode**: Toggle (if handling medical data)
- **ISO 27001 Compliance**: Toggle

**Save Changes** button

***

#### **Tab 6: Integration Settings**

**Section 1: API Configuration**

- **Enable REST API**: Toggle
- **API Base URL**: Display only (https://yourdomain.com/api)
- **API Version**: Display only (v1)
- **API Documentation**: Link to Swagger/OpenAPI docs
- **Generate API Key**: Button (for system integrations)
- **Rate Limiting**:
    - Enable Rate Limiting: Toggle
    - Requests per Minute: Number input - Default: 1000
    - Burst Limit: Number input - Default: 100

**Section 2: IoT Device Protocols**

- **MQTT Configuration**:
    - Enable MQTT: Toggle
    - MQTT Broker URL: Text input
    - MQTT Port: Number input (Default: 1883)
    - MQTT Username: Text input
    - MQTT Password: Password input
    - QoS Level: Dropdown (0, 1, 2)
    - Keep Alive: Number input (seconds)
- **Modbus TCP Configuration**:
    - Enable Modbus: Toggle
    - Modbus Gateway IP: Text input
    - Modbus Port: Number input (Default: 502)
- **OPC-UA Configuration**:
    - Enable OPC-UA: Toggle
    - OPC-UA Server URL: Text input
    - Security Mode: Dropdown (None, Sign, SignAndEncrypt)

**Section 3: Third-party Integrations**

- **ERP Integration**:
    - ERP System: Dropdown (SAP, Oracle, Custom)
    - API Endpoint: Text input
    - API Key: Password input
    - Sync Frequency: Dropdown (Real-time, Hourly, Daily)
- **MES Integration**:
    - MES System: Dropdown (Siemens, Rockwell, Custom)
    - Connection String: Text input
    - Test Connection: Button

**Section 4: Webhook Configuration**

- **Enable Webhooks**: Toggle
- **Webhook Events**: Multi-select
    - User Created
    - Company Created
    - License Expired
    - Production Completed
    - Machine Alert
    - Custom Events
- **Webhook URL**: Text input
- **Authentication**: Dropdown (None, Bearer Token, API Key)
- **Retry on Failure**: Toggle
- **Max Retries**: Number input

**Save Changes** button

***

#### **Tab 7: Performance Optimization**

**Section 1: Caching Configuration**

- **Enable Redis Cache**: Toggle
- **Redis Host**: Text input
- **Redis Port**: Number input (Default: 6379)
- **Redis Password**: Password input
- **Cache TTL (seconds)**: Number input - Default: 3600
- **Cache Strategy**: Dropdown (Lazy Loading, Write-Through, Write-Behind)
- **Clear Cache Button**: Manual cache flush

**Section 2: Database Optimization**

- **Enable Query Caching**: Toggle
- **Connection Pool Size**: Number input - Default: 100
- **Connection Timeout**: Number input (seconds) - Default: 30
- **Command Timeout**: Number input (seconds) - Default: 300
- **Enable Lazy Loading**: Toggle
- **Enable Query Logging**: Toggle (log slow queries)
- **Slow Query Threshold**: Number input (milliseconds) - Default: 1000

**Section 3: Application Performance**

- **Enable Response Compression**: Toggle (GZIP)
- **Enable Static File Caching**: Toggle
- **Cache Duration (days)**: Number input - Default: 7
- **Enable CDN**: Toggle
- **CDN URL**: Text input (if using CDN)

**Section 4: Monitoring \& Logging**

- **Log Level**: Dropdown (Debug, Info, Warning, Error, Critical)
- **Enable Performance Monitoring**: Toggle
- **Enable Application Insights**: Toggle (if using Azure)
- **Application Insights Key**: Text input

**Save Changes** button

***

#### **Tab 8: Notification Settings**

**Section 1: Global Notification Preferences**

- **Enable In-App Notifications**: Toggle
- **Enable Email Notifications**: Toggle
- **Enable SMS Notifications**: Toggle
- **Enable WhatsApp Notifications**: Toggle
- **Enable Push Notifications**: Toggle (browser/mobile)

**Section 2: System Alert Thresholds**

- **CPU Usage Alert**: Number input (%) - Default: 80%
- **Memory Usage Alert**: Number input (%) - Default: 85%
- **Disk Usage Alert**: Number input (%) - Default: 90%
- **Database Connection Alert**: Toggle (alert on connection failures)
- **API Response Time Alert**: Number input (milliseconds) - Default: 2000

**Section 3: License Alert Settings**

- **License Expiry Warning Days**: Multi-number input (e.g., 30, 15, 7, 1 days before)
- **Send Reminder To**: Checkboxes
    - Company Admin
    - Super Admin
    - Billing Contact

**Section 4: Custom Alert Rules**

- **Add Custom Rule**: Button
- **Rule Builder**:
    - Rule Name: Text input
    - Condition: Dropdown (Greater than, Less than, Equals, etc.)
    - Threshold: Number input
    - Action: Checkboxes (Email, SMS, WhatsApp, In-App)
    - Recipients: User selector

**Save Changes** button

***

## **5. 🔐 Roles \& Permissions**

### **Breadcrumb**:

```
🏠 Super Admin > Roles & Permissions
```


### **Purpose**:

Comprehensive role-based access control (RBAC) management for defining user roles, permissions, and access hierarchies across the platform.[^1]

### **Main Page Layout**:

#### **Top Section: Overview Cards**

1. **Total Roles Defined**: 12 System Roles
2. **Active Permission Sets**: 45 Permission Groups
3. **Companies Using Custom Roles**: 8 Companies
4. **Last Modified**: 2 days ago

#### **Action Buttons** (Top Right):

- **+ Create New Role** (Primary button)
- **Import Role from Template** (Template library)
- **Export Roles** (Excel/PDF documentation)

***

### **Pre-defined System Roles Table**

**Default Roles** (Cannot be deleted, only modified):

#### **1. Super Admin**

- **Description**: Full system access with tenant management capabilities
- **User Count**: 3 users
- **Permissions**: All permissions (display "Full Access")
- **Actions**: View Details | Clone


#### **2. Company Admin**

- **Description**: Full access within own company/tenant
- **User Count**: 47 users (across all companies)
- **Permissions**: All company-level permissions
- **Actions**: View Details | Edit | Clone


#### **3. Manager**

- **Description**: Department/section management with reporting access
- **User Count**: 145 users
- **Key Permissions**:
    - View all dashboards
    - Manage department users
    - Generate reports
    - Configure department settings
- **Actions**: View Details | Edit | Clone


#### **4. Supervisor**

- **Description**: Production monitoring and basic operations
- **User Count**: 234 users
- **Key Permissions**:
    - View production dashboards
    - Monitor machine status
    - Create production entries
    - View reports
- **Actions**: View Details | Edit | Clone


#### **5. Operator**

- **Description**: Shop floor operations and data entry
- **User Count**: 567 users
- **Key Permissions**:
    - Record production data
    - Update machine status
    - View assigned machines
    - Basic reporting
- **Actions**: View Details | Edit | Clone


#### **6. Quality Inspector**

- **Description**: Quality control and inspection management
- **User Count**: 89 users
- **Key Permissions**:
    - Perform inspections
    - Record quality data
    - Generate quality reports
    - Manage defects
- **Actions**: View Details | Edit | Clone


#### **7. Maintenance Technician**

- **Description**: Maintenance scheduling and execution
- **User Count**: 112 users
- **Key Permissions**:
    - View maintenance schedules
    - Update work orders
    - Record maintenance activities
    - Track spare parts
- **Actions**: View Details | Edit | Clone


#### **8. Viewer**

- **Description**: Read-only access to dashboards and reports
- **User Count**: 78 users
- **Key Permissions**:
    - View dashboards (read-only)
    - View reports (read-only)
    - No edit/delete permissions
- **Actions**: View Details | Edit | Clone

***

### **Custom Company Roles Table**

**List of custom roles created by companies**:

**Columns**:

- **Role Name**: Custom role identifier
- **Company**: Which company created this role
- **Based On**: Parent role (which default role was cloned)
- **User Count**: Number of users with this role
- **Created Date**: When role was created
- **Last Modified**: Last modification date
- **Status**: Active/Inactive
- **Actions**: View Details | Edit | Delete | Clone

***

### **Create/Edit Role Modal**

**Form Sections**:

#### **Section 1: Basic Information**

- **Role Name**: Text input (required) - e.g., "Production Manager"
- **Role Code**: Auto-generated or manual (e.g., PROD_MGR)
- **Description**: Textarea - Describe role purpose
- **Base Template**: Dropdown (clone from existing role - optional)
- **Role Type**: Radio buttons
    - System Role (available to all companies)
    - Company-Specific Role (only for selected company)
- **Company Selection**: Dropdown (if company-specific)
- **Status**: Toggle (Active/Inactive)

***

#### **Section 2: Permission Matrix**

**Module-based Permission Grid**:

**Table Layout**:


| Module/Feature | View | Create | Edit | Delete | Export | Configure |
| :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| **Dashboard** | ☑ | - | - | - | ☑ | ☑ |
| **OEE Module** | ☑ | ☑ | ☑ | ☐ | ☑ | ☐ |
| **Energy Module** | ☑ | ☑ | ☑ | ☐ | ☑ | ☐ |
| **Machine Management** | ☑ | ☑ | ☑ | ☑ | ☑ | ☑ |
| **Production** | ☑ | ☑ | ☑ | ☐ | ☑ | ☐ |
| **Quality Inspection** | ☑ | ☑ | ☑ | ☑ | ☑ | ☑ |
| **Maintenance** | ☑ | ☑ | ☑ | ☑ | ☑ | ☑ |
| **Inventory** | ☑ | ☐ | ☐ | ☐ | ☑ | ☐ |
| **HR Management** | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Reports** | ☑ | ☑ | ☐ | ☐ | ☑ | ☐ |
| **User Management** | ☑ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Company Settings** | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Role Management** | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **License Management** | ☑ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **System Configuration** | ☐ | ☐ | ☐ | ☐ | ☐ | ☐ |
| **Audit Logs** | ☑ | - | - | - | ☑ | ☐ |

**Quick Selection Options**:

- **Select All**: Check all permissions
- **Clear All**: Uncheck all permissions
- **Read Only**: Check only "View" permissions
- **Full Access**: Check all available permissions

***

#### **Section 3: Data Access Restrictions**

**Data Visibility Rules**:

**Scope Level**: Radio buttons

- **All Data**: Access all company data (default for Admin roles)
- **Department Only**: Access only assigned department data
- **Section Only**: Access only assigned section data
- **Own Data Only**: Access only own created/assigned data

**Filters**:

- **Department Access**: Multi-select dropdown (if department-level)
- **Section Access**: Multi-select dropdown (if section-level)
- **Machine Access**: Multi-select dropdown (restrict to specific machines)
- **Product Access**: Multi-select dropdown (restrict to specific products)

***

#### **Section 4: Feature-Specific Permissions**

**Expandable Accordion Sections**:

**Dashboard Permissions**:

- ☑ View Executive Dashboard
- ☑ View OEE Dashboard
- ☑ View Energy Dashboard
- ☑ View Machine Dashboard
- ☑ View Quality Dashboard
- ☑ View Maintenance Dashboard
- ☐ Customize Dashboard Layout
- ☐ Create Custom Dashboards

**Report Permissions**:

- ☑ View Daily Production Report
- ☑ View OEE Monitoring Report
- ☑ View Energy Consumption Report
- ☑ View Quality Reports
- ☑ View Maintenance Reports
- ☐ Schedule Reports
- ☑ Export Reports (PDF/Excel)
- ☐ Create Custom Reports

**User Management Permissions**:

- ☑ View User List
- ☐ Create New Users
- ☐ Edit User Details
- ☐ Delete Users
- ☐ Reset User Passwords
- ☐ Assign Roles to Users
- ☐ Deactivate Users

**System Administration** (Super Admin only):

- ☐ Company Management (Add/Edit/Delete)
- ☐ License Management
- ☐ System Configuration
- ☐ Billing Management
- ☐ Security Settings
- ☐ Integration Settings
- ☐ View System Logs

***

#### **Section 5: Advanced Settings**

**Time-based Access**:

- **Restrict Access by Time**: Toggle
- **Allowed Days**: Multi-select (Mon, Tue, Wed, Thu, Fri, Sat, Sun)
- **Allowed Hours**: Time range picker (e.g., 08:00 AM - 06:00 PM)

**IP-based Access**:

- **Restrict Access by IP**: Toggle
- **Allowed IP Addresses**: Textarea (one IP per line or CIDR)

**Session Settings**:

- **Override Session Timeout**: Toggle
- **Custom Session Timeout**: Number input (minutes)

**Notification Preferences**:

- **Receive System Alerts**: Toggle
- **Receive Production Alerts**: Toggle
- **Receive Quality Alerts**: Toggle
- **Receive Maintenance Alerts**: Toggle

**Action Buttons**:

- **Save Role**: Create/update role
- **Save \& Assign Users**: Save and open user assignment dialog
- **Cancel**: Close without saving

***

### **Role Details Page**

**Breadcrumb**:

```
🏠 Super Admin > Roles & Permissions > [Role Name]
```

**Tab Navigation**:

#### **Tab 1: Overview**

- Role information display (editable sections)
- **Permission Summary Card**:
    - Total permissions assigned
    - Read permissions count
    - Write permissions count
    - Delete permissions count
    - Configuration access
- **Users with This Role**:
    - Count by company (if system role)
    - Recent assignments (last 10 users)
- **Quick Actions**:
    - Edit Role
    - Clone Role
    - Delete Role (if no users assigned)
    - View Audit Log


#### **Tab 2: Detailed Permissions**

- Complete permission matrix (expandable tree view)
- **Module-wise breakdown**:
    - Each module as parent node
    - Permissions as child nodes with checkboxes
    - Visual indicators for granted/denied


#### **Tab 3: Assigned Users**

- Table of all users with this role
- Columns: User Name, Email, Company, Department, Assigned Date, Status
- **Actions**:
    - Remove role from user
    - View user details
- **Bulk Actions**:
    - Remove role from selected users
    - Notify selected users
- **Filters**: Company, Department, Status


#### **Tab 4: Activity Log**

- Audit trail of role changes
- Columns: Timestamp, Modified By, Change Type, Details
- **Change Types**:
    - Role created
    - Permission added/removed
    - Role assigned to user
    - Role removed from user
    - Role settings modified
- Export log


#### **Tab 5: Role Comparison** (if cloned from another role)

- Side-by-side comparison with base role
- Highlight differences in permissions
- **Visual indicators**:
    - Green: New permissions added
    - Red: Permissions removed
    - Yellow: Modified settings

***

### **Permission Templates Library**

**Pre-built Role Templates** (Quick Start):

1. **Manufacturing Operations Template**:
    - Production Manager
    - Production Supervisor
    - Machine Operator
    - Quality Inspector
    - Maintenance Technician
2. **Management Template**:
    - Plant Manager
    - Department Manager
    - Shift Manager
    - Operations Manager
3. **Analytics Template**:
    - Data Analyst
    - Business Intelligence User
    - Report Designer
4. **Maintenance Template**:
    - Maintenance Manager
    - Maintenance Planner
    - Maintenance Technician
    - Spare Parts Manager

**Import Template Button**: Select and import pre-configured role

***

## **6. 🧭 Menu Management**

### **Breadcrumb**:

```
🏠 Super Admin > Menu Management
```


### **Purpose**:

Dynamic menu structure configuration enabling role-based menu visibility and customization for different user types across the platform.[^1]

### **Main Page Layout**:

#### **Top Section: Overview Cards**

1. **Total Menu Items**: 45 Menu Items
2. **Active Menu Structures**: 8 Configurations
3. **Companies with Custom Menus**: 5 Companies
4. **Last Modified**: Yesterday

#### **Action Buttons** (Top Right):

- **+ Add Menu Item** (Primary button)
- **Add Menu Group** (Create parent menu)
- **Import Menu Structure** (From template or company)
- **Export Menu Configuration** (JSON/Excel)

***

### **Menu Structure Management**

**Visual Interface Options**:

#### **Option 1: Tree View (Hierarchical)**

**Interactive Tree Structure**:

```
📊 Dashboard [Edit] [Delete]
├─ 🏭 Production
│  ├─ OEE Dashboard [Edit] [Delete]
│  ├─ Production Monitoring [Edit] [Delete]
│  └─ Loading/Unloading [Edit] [Delete]
├─ ⚡ Energy
│  ├─ Plant Overview [Edit] [Delete]
│  ├─ Machine-wise Consumption [Edit] [Delete]
│  └─ Energy Configuration [Edit] [Delete]
├─ 🔧 Machine
│  ├─ Machine Live Track [Edit] [Delete]
│  ├─ Machine Dashboard [Edit] [Delete]
│  └─ Machine Status [Edit] [Delete]
├─ 📊 Reports [Edit] [Delete]
│  ├─ Daily Production Report [Edit] [Delete]
│  ├─ OEE Monitoring [Edit] [Delete]
│  └─ Energy Reports [Edit] [Delete]
├─ 🔍 Quality Inspection [Edit] [Delete]
├─ 📦 Inventory Management [Edit] [Delete]
├─ 🔧 Maintenance [Edit] [Delete]
├─ 👥 HR Management [Edit] [Delete]
└─ ⚙️ Settings [Edit] [Delete]
   ├─ Company Profile [Edit] [Delete]
   ├─ User Management [Edit] [Delete]
   └─ System Preferences [Edit] [Delete]
```

**Drag-and-Drop Functionality**:

- Reorder menu items by dragging
- Change parent-child relationships
- Real-time preview of menu changes

***

#### **Option 2: Table View (Detailed)**

**Menu Items Table**:

**Columns**:

- **Drag Handle**: Icon for reordering
- **Menu ID**: Unique identifier (e.g., MENU_001)
- **Menu Name**: Display name (e.g., "Dashboard")
- **Menu Icon**: Icon preview with edit button
- **Parent Menu**: Parent item name (empty if top-level)
- **Route/URL**: Navigation path (e.g., /dashboard)
- **Order**: Display order number (editable)
- **Roles with Access**: Pills showing roles (e.g., Admin, Manager, Supervisor)
- **Status**: Active/Inactive toggle
- **Visible to**: Badges (All Companies / Specific Companies)
- **Actions**: Dropdown
    - Edit Menu
    - Add Sub-menu
    - Configure Permissions
    - Clone Menu
    - Delete Menu

**Filters**:

- **Parent Menu**: Dropdown (show only children of selected parent)
- **Role Access**: Multi-select (show menus accessible to selected roles)
- **Status**: Active/Inactive
- **Company**: Specific company filter

***

### **Add/Edit Menu Item Modal**

**Form Sections**:

#### **Section 1: Basic Information**

- **Menu Name**: Text input (required) - Display name
- **Menu Code**: Auto-generated or manual (e.g., DASHBOARD_MAIN)
- **Menu Type**: Radio buttons
    - Menu Item (navigable link)
    - Menu Group (parent container with sub-menus)
    - External Link (opens external URL)
    - Separator (visual divider)
- **Parent Menu**: Dropdown (select parent or "Top Level")
- **Description**: Textarea - Purpose of this menu item

***

#### **Section 2: Navigation \& Display**

**If Menu Type = Menu Item or External Link**:

- **Route/URL**: Text input (required)
    - For Menu Item: Internal route (e.g., /dashboard, /production/oee)
    - For External Link: Full URL (e.g., https://help.eagleanalytics.com)
- **Open in New Tab**: Checkbox (for external links)
- **Query Parameters**: Key-value pairs (optional)

**Visual Configuration**:

- **Menu Icon**: Icon picker (FontAwesome, Material Icons, or custom SVG)
    - Icon preview
    - Icon color picker
    - Icon size dropdown (Small, Medium, Large)
- **Badge**: Optional badge configuration
    - Badge Type: Dropdown (Count, New, Hot, Beta, Custom)
    - Badge Value: Text input (e.g., "5" for count, "New")
    - Badge Color: Color picker

**Display Settings**:

- **Display Order**: Number input (controls menu position)
- **Tooltip Text**: Text input (hover tooltip)
- **Keyboard Shortcut**: Text input (e.g., Ctrl+D)

***

#### **Section 3: Access Control \& Permissions**

**Role-based Access**:

- **Available to All Roles**: Checkbox
- **Specific Roles**: Multi-select dropdown (if not all roles)
    - Super Admin
    - Company Admin
    - Manager
    - Supervisor
    - Operator
    - Quality Inspector
    - Maintenance Technician
    - Viewer
    - [Custom Roles]

**Company-based Access**:

- **Available to All Companies**: Checkbox
- **Specific Companies**: Multi-select dropdown (if not all companies)
- **License-based Visibility**: Checkboxes
    - Show only if company has OEE Module
    - Show only if company has Energy Module
    - Show only if company has specific features

**Conditional Display Rules**:

- **Display Condition**: Dropdown
    - Always Show
    - Show if User has Permission
    - Show if Feature Enabled
    - Show if Data Exists
    - Custom Condition (JavaScript expression)

***

#### **Section 4: Advanced Settings**

**Behavior**:

- **Expanded by Default**: Checkbox (for menu groups with children)
- **Highlight on Active**: Toggle (highlight when route is active)
- **Collapsible**: Toggle (allow expand/collapse for groups)
- **Closeable**: Toggle (allow user to hide menu item)

**Responsive Behavior**:

- **Hide on Mobile**: Checkbox
- **Hide on Tablet**: Checkbox
- **Show in Mobile Menu**: Checkbox
- **Priority**: Number (for overflow menu on small screens)

**Notification Badge**:

- **Enable Dynamic Badge**: Toggle
- **Badge Source**: Dropdown (Notification Count, Pending Tasks, Custom API)
- **API Endpoint**: Text input (if Custom API)
- **Refresh Interval**: Number input (seconds)

**Multi-language**:

- **Enable Translation**: Toggle
- **Translation Key**: Text input (for i18n)
- **Translations**: Grid for multiple languages
    - Language | Translated Name | Actions

***

#### **Section 5: Sub-menu Configuration** (If Menu Type = Menu Group)

**Sub-menu List**:

- **Existing Sub-menus**: Drag-drop sortable list
- **Add Sub-menu Button**: Opens nested menu creation
- **Layout Style**: Radio buttons
    - Dropdown (default)
    - Mega Menu (for many items)
    - Sidebar (expanded sidebar menu)
    - Tabs (tab-based navigation)

**Action Buttons**:

- **Save Menu**: Create/update menu item
- **Save \& Add Another**: Save and create new menu
- **Preview**: Show menu preview in sidebar
- **Cancel**: Close without saving

***

### **Menu Configuration Templates**

**Pre-built Menu Structures**:

#### **Template 1: Super Admin Menu**

```
- Dashboard
- Company Management
- License Management
- System Configuration
- Roles & Permissions
- Menu Management
- Monitoring & Logs
- Notifications
- Languages
- Device Management
- Security & Compliance
- Template Library
- Billing & Subscription
- Menu Analytics
- Dashboard Builder
- Reports & Analytics
- Support & Feedback
```


#### **Template 2: Company Admin Menu**

```
- Dashboard
- Production
  - OEE Dashboard
  - Production Monitoring
  - Loading/Unloading
- Energy
  - Plant Overview
  - Machine-wise Consumption
- Machine Management
- Quality Inspection
- Maintenance
- Inventory
- Reports
- User Management
- Company Settings
```


#### **Template 3: Manager Menu**

```
- Dashboard
- Production Overview
- Machine Status
- Quality Dashboard
- Reports
- Team Management
```


#### **Template 4: Operator Menu**

```
- Dashboard
- Production Entry
- Machine Status
- Quality Check
- My Tasks
```

**Import Template Button**: Select and apply template to company or role

***

### **Menu Details Page**

**Breadcrumb**:

```
🏠 Super Admin > Menu Management > [Menu Name]
```

**Tab Navigation**:

#### **Tab 1: Overview**

- Menu item details (editable)
- **Usage Statistics Card**:
    - Total clicks (last 30 days)
    - Unique users accessed
    - Average time on page
    - Bounce rate
- **Access Information**:
    - Roles with access (list)
    - Companies using this menu (count)
    - Total users with access (count)
- **Quick Actions**:
    - Edit Menu
    - Clone Menu
    - Add Sub-menu
    - View Analytics


#### **Tab 2: Sub-menu Items** (If menu group)

- List of child menu items
- Drag-and-drop reordering
- Quick edit inline
- Add new sub-menu button


#### **Tab 3: Access Control**

- Role permission matrix
- Company visibility settings
- Feature dependency configuration
- Custom access rules editor


#### **Tab 4: Analytics**

**Menu Usage Analytics**:

- **Click Volume Chart** (Last 30 days)
- **Top Users** (Most frequent accessors)
- **Access by Role** (Pie chart)
- **Access by Company** (Bar chart)
- **Peak Usage Times** (Heatmap)


#### **Tab 5: Translations**

- Multi-language menu name translations
- Language list with edit options
- Add new language button
- Translation status indicators


#### **Tab 6: Change History**

- Audit trail of menu modifications
- Columns: Timestamp, Modified By, Change Type, Details
- Export log

***

### **Menu Preview Panel** (Right Sidebar)

**Live Preview Section**:

- **Preview Type**: Tabs
    - Desktop View
    - Tablet View
    - Mobile View
- **Role Selector**: Dropdown (preview as different role)
- **Company Selector**: Dropdown (preview for specific company)
- **Live Menu Rendering**: Shows actual menu as user would see it

***

### **Bulk Operations**

**Selected Menu Actions** (when items checked):

- **Change Parent**: Move multiple items to new parent
- **Change Order**: Bulk reordering tool
- **Assign Roles**: Add/remove role access for multiple items
- **Change Status**: Activate/Deactivate multiple items
- **Export Selected**: Download menu configuration
- **Delete Selected**: Bulk delete (with confirmation)

***

This comprehensive specification provides you with complete details for building the Super Admin Dashboard and the first 6 menu items. Each section includes detailed functionality, UI elements, data fields, and user interactions necessary for full implementation.[^1]
