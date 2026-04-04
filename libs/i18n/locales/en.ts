import type { Locale } from './types'

export const en: Locale = {
  common: {
    welcome: "Welcome to Lark CLI",
    siteName: "Lark CLI",
    login: "Login",
    signup: "Sign Up",
    logout: "Logout",
    profile: "Profile",
    settings: "Settings",
    and: "and",
    loading: "Loading...",
    unexpectedError: "An unexpected error occurred",
    notAvailable: "N/A",
    viewPlans: "View Plans",
    yes: "Yes",
    no: "No",
    theme: {
      light: "Light Theme",
      dark: "Dark Theme",
      system: "System Theme",
      toggle: "Toggle Theme",
      appearance: "Appearance",
      colorScheme: "Color Scheme",
      themes: {
        default: "Default",
        claude: "Claude",
        "cosmic-night": "Cosmic Night",
        "modern-minimal": "Modern Minimal",
        "ocean-breeze": "Ocean Breeze"
      }
    }
  },
  navigation: {
    home: "Home",
    dashboard: "Dashboard",
    orders: "Orders",
    shipments: "Shipments",
    tracking: "Tracking",
    admin: {
      dashboard: "Dashboard",
      users: "Users",
      subscriptions: "Subscriptions",
      orders: "Orders",
      credits: "Credits",
      application: "Application",
      blog: "Blog"
    }
  },
  actions: {
    save: "Save",
    cancel: "Cancel",
    confirm: "Confirm",
    delete: "Delete",
    edit: "Edit",
    tryAgain: "Try again",
    createAccount: "Create account",
    sendCode: "Send Code",
    verify: "Verify",
    backToList: "Back to Users",
    saveChanges: "Save Changes",
    createUser: "Create User",
    deleteUser: "Delete User",
    back: "Back",
    resendCode: "Resend Code",
    resendVerificationEmail: "Resend Verification Email",
    upload: "Upload",
    previous: "Previous",
    next: "Next",
    createPost: "New Post",
    deletePost: "Delete Post",
    backToBlog: "Back to Blog"
  },
  email: {
    verification: {
      subject: "Verify your Lark CLI account",
      title: "Verify your email address",
      greeting: "Hello {{name}},",
      message: "Thank you for registering with Lark CLI. To complete your registration, please click the button below to verify your email address.",
      button: "Verify Email Address",
      alternativeText: "Or, copy and paste the following link into your browser:",
      expiry: "This link will expire in {{expiry_hours}} hours.",
      disclaimer: "If you didn't request this verification, please ignore this email.",
      signature: "Happy Shipping, The Lark CLI Team",
    copyright: "© {{year}} Lark CLI. All rights reserved."
    },
    resetPassword: {
      subject: "Reset your Lark CLI password",
      title: "Reset your password",
      greeting: "Hello {{name}},",
      message: "We received a request to reset your password. Please click the button below to create a new password. If you didn't make this request, you can safely ignore this email.",
      button: "Reset Password",
      alternativeText: "Or, copy and paste the following link into your browser:",
      expiry: "This link will expire in {{expiry_hours}} hours.",
      disclaimer: "If you didn't request a password reset, no action is required.",
      signature: "Happy Shipping, The Lark CLI Team",
      copyright: "© {{year}} Lark CLI. All rights reserved."
    }
  },
  auth: {
    metadata: {
      signin: {
        title: "Lark CLI - Sign In",
        description: "Sign in to your Lark CLI account to access your dashboard, manage subscriptions, and use premium features.",
        keywords: "sign in, login, authentication, account access, dashboard"
      },
      signup: {
        title: "Lark CLI - Create Account",
        description: "Create your Lark CLI account and start building amazing SaaS applications with our comprehensive starter kit.",
        keywords: "sign up, register, create account, new user, get started"
      },
      forgotPassword: {
        title: "Lark CLI - Reset Password",
        description: "Reset your Lark CLI account password securely. Enter your email to receive password reset instructions.",
        keywords: "forgot password, reset password, password recovery, account recovery"
      },
      resetPassword: {
        title: "Lark CLI - Create New Password",
        description: "Create a new secure password for your Lark CLI account. Choose a strong password to protect your account.",
        keywords: "new password, password reset, secure password, account security"
      },
      phone: {
        title: "Lark CLI - Phone Login",
        description: "Sign in to Lark CLI using your phone number. Quick and secure authentication with SMS verification.",
        keywords: "phone login, SMS verification, mobile authentication, phone number"
      },
      wechat: {
        title: "Lark CLI - WeChat Login",
        description: "Sign in to Lark CLI using your WeChat account. Convenient authentication for Chinese users.",
        keywords: "WeChat login, social login, Chinese authentication"
      }
    },
    signin: {
      title: "Sign in to your account",
      welcomeBack: "Welcome back",
      socialLogin: "Sign in with your favorite social account",
      continueWith: "Or continue with",
      email: "Email",
      emailPlaceholder: "Enter your email",
      password: "Password",
      forgotPassword: "Forgot password?",
      rememberMe: "Remember me",
      submit: "Sign in",
      submitting: "Signing in...",
      noAccount: "Don't have an account?",
      signupLink: "Sign up",
      termsNotice: "By clicking continue, you agree to our",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      socialProviders: {
        google: "Google",
        github: "GitHub",
        apple: "Apple",
        wechat: "WeChat",
        phone: "Phone"
      },
      errors: {
        invalidEmail: "Please enter a valid email",
        requiredEmail: "Email is required",
        requiredPassword: "Password is required",
        invalidCredentials: "Invalid email or password",
        captchaRequired: "Please complete the captcha verification",
        emailNotVerified: {
          title: "Email verification required",
          description: "Please check your email and click the verification link. If you haven't received the email, click the button below to resend.",
          resendSuccess: "Verification email has been resent, please check your inbox.",
          resendError: "Failed to resend verification email, please try again later.",
          dialogTitle: "Resend Verification Email",
          dialogDescription: "Please complete the captcha verification before resending the verification email",
          emailLabel: "Email Address",
          sendButton: "Send Verification Email",
          sendingButton: "Sending...",
          waitButton: "Wait {seconds}s"
        }
      }
    },
    signup: {
      title: "Sign up for Lark CLI",
      createAccount: "Create an account",
      socialSignup: "Sign up with your favorite social account",
      continueWith: "Or continue with",
      name: "Name",
      namePlaceholder: "Enter your name",
      email: "Email",
      emailPlaceholder: "Enter your email",
      password: "Password",
      passwordPlaceholder: "Create a password",
      imageUrl: "Profile Image URL",
      imageUrlPlaceholder: "https://example.com/your-image.jpg",
      optional: "Optional",
      submit: "Create account",
      submitting: "Creating account...",
      haveAccount: "Already have an account?",
      signinLink: "Sign in",
      termsNotice: "By clicking continue, you agree to our",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      verification: {
        title: "Verification Required",
        sent: "We've sent a verification email to",
        checkSpam: "Can't find the email? Please check your spam folder.",
        spamInstruction: "If you still don't see it,"
      },
      errors: {
        invalidName: "Please enter a valid name",
        requiredName: "Name is required",
        invalidEmail: "Please enter a valid email",
        requiredEmail: "Email is required",
        invalidPassword: "Please enter a valid password",
        requiredPassword: "Password is required",
        invalidImage: "Please enter a valid image URL",
        captchaRequired: "Please complete the captcha verification",
        captchaError: "Captcha verification failed, please try again",
        captchaExpired: "Captcha verification expired, please try again"
      }
    },
    phone: {
      title: "Login with Phone",
      description: "Enter your phone number to receive a verification code",
      phoneNumber: "Phone Number",
      phoneNumberPlaceholder: "Enter your phone number",
      countryCode: "Country/Region",
      verificationCode: "Verification Code",
      enterCode: "Enter Verification Code",
      sendingCode: "Sending code...",
      verifying: "Verifying...",
      codeSentTo: "Verification code sent to",
      resendIn: "Resend in",
      seconds: "seconds",
      resendCode: "Resend Code",
      resendCountdown: "seconds remaining",
      termsNotice: "By clicking continue, you agree to our",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      errors: {
        invalidPhone: "Please enter a valid phone number",
        requiredPhone: "Phone number is required",
        requiredCountryCode: "Please select country/region",
        invalidCode: "Please enter a valid verification code",
        requiredCode: "Verification code is required",
        captchaRequired: "Please complete the captcha verification"
      }
    },
    forgetPassword: {
      title: "Forgot Password",
      description: "Reset your password and regain access to your account",
      email: "Email",
      emailPlaceholder: "Enter your email",
      submit: "Send reset link",
      submitting: "Sending...",
      termsNotice: "By clicking continue, you agree to our",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      verification: {
        title: "Check your email",
        sent: "We've sent a password reset link to",
        checkSpam: "Can't find the email? Please check your spam folder."
      },
      errors: {
        invalidEmail: "Please enter a valid email",
        requiredEmail: "Email is required",
        captchaRequired: "Please complete the captcha verification"
      }
    },
    resetPassword: {
      title: "Reset Password",
      description: "Create a new password for your account",
      password: "New Password",
      passwordPlaceholder: "Enter your new password",
      confirmPassword: "Confirm Password",
      confirmPasswordPlaceholder: "Confirm your new password",
      submit: "Reset Password",
      submitting: "Resetting...",
      success: {
        title: "Password Reset Successful",
        description: "Your password has been successfully reset.",
        backToSignin: "Back to Sign In",
        goToSignIn: "Back to Sign In"
      },
      errors: {
        invalidPassword: "Password must be at least 8 characters",
        requiredPassword: "Password is required",
        passwordsDontMatch: "Passwords don't match",
        invalidToken: "Invalid or expired reset link. Please try again."
      }
    },
    wechat: {
      title: "WeChat Login",
      description: "Scan with WeChat to log in",
      scanQRCode: "Please scan the QR code with WeChat",
      orUseOtherMethods: "Or use other login methods",
      loadingQRCode: "Loading QR code...",
      termsNotice: "By clicking continue, you agree to our",
      termsOfService: "Terms of Service",
      privacyPolicy: "Privacy Policy",
      errors: {
        loadingFailed: "Failed to load WeChat QR code",
        networkError: "Network error, please try again"
      }
    },
    // Auth error codes mapping for Better Auth 1.4
    authErrors: {
      // User errors
      USER_NOT_FOUND: "No account found with this email",
      USER_ALREADY_EXISTS: "User with this email already exists",
      USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL: "User already exists. Please use another email",
      USER_EMAIL_NOT_FOUND: "User email not found",
      FAILED_TO_CREATE_USER: "Failed to create user",
      FAILED_TO_UPDATE_USER: "Failed to update user",
      
      // Authentication errors
      INVALID_EMAIL: "Invalid email address",
      INVALID_PASSWORD: "Invalid password",
      INVALID_EMAIL_OR_PASSWORD: "Invalid email or password",
      INVALID_CREDENTIALS: "Invalid credentials provided",
      INVALID_TOKEN: "Invalid or expired token",
      PASSWORD_TOO_SHORT: "Password is too short",
      PASSWORD_TOO_LONG: "Password is too long",
      
      // Email verification errors
      EMAIL_NOT_VERIFIED: "Please verify your email address",
      EMAIL_ALREADY_VERIFIED: "Email is already verified",
      EMAIL_MISMATCH: "Email mismatch",
      EMAIL_CAN_NOT_BE_UPDATED: "Email cannot be updated",
      VERIFICATION_EMAIL_NOT_ENABLED: "Verification email is not enabled",
      
      // Session errors
      SESSION_EXPIRED: "Your session has expired. Please sign in again",
      SESSION_NOT_FRESH: "Session is not fresh. Please re-authenticate",
      FAILED_TO_CREATE_SESSION: "Failed to create session",
      FAILED_TO_GET_SESSION: "Failed to get session",
      
      // Account errors
      ACCOUNT_NOT_FOUND: "Account not found",
      ACCOUNT_BLOCKED: "Your account has been temporarily blocked",
      CREDENTIAL_ACCOUNT_NOT_FOUND: "Credential account not found",
      SOCIAL_ACCOUNT_ALREADY_LINKED: "Social account is already linked",
      LINKED_ACCOUNT_ALREADY_EXISTS: "Linked account already exists",
      FAILED_TO_UNLINK_LAST_ACCOUNT: "Cannot unlink your last account",
      USER_ALREADY_HAS_PASSWORD: "User already has a password",
      
      // Phone number errors
      PHONE_NUMBER_ALREADY_EXISTS: "Phone number is already registered",
      INVALID_PHONE_NUMBER: "Invalid phone number format",
      OTP_EXPIRED: "Verification code has expired",
      INVALID_OTP: "Invalid verification code",
      OTP_TOO_MANY_ATTEMPTS: "Too many verification attempts. Please request a new code",
      
      // Provider errors
      PROVIDER_NOT_FOUND: "Provider not found",
      ID_TOKEN_NOT_SUPPORTED: "ID token not supported",
      FAILED_TO_GET_USER_INFO: "Failed to get user info",
      
      // Security errors
      CAPTCHA_REQUIRED: "Please complete the captcha verification",
      CAPTCHA_INVALID: "Captcha verification failed",
      TOO_MANY_REQUESTS: "Too many requests. Please try again later",
      CROSS_SITE_NAVIGATION_LOGIN_BLOCKED: "Cross-site navigation login blocked",
      INVALID_ORIGIN: "Invalid origin",
      MISSING_OR_NULL_ORIGIN: "Missing or invalid origin",
      
      // Callback URL errors
      INVALID_CALLBACK_URL: "Invalid callback URL",
      INVALID_REDIRECT_URL: "Invalid redirect URL",
      INVALID_ERROR_CALLBACK_URL: "Invalid error callback URL",
      INVALID_NEW_USER_CALLBACK_URL: "Invalid new user callback URL",
      CALLBACK_URL_REQUIRED: "Callback URL is required",
      
      // Validation errors
      VALIDATION_ERROR: "Validation error",
      MISSING_FIELD: "Required field is missing",
      FIELD_NOT_ALLOWED: "Field is not allowed",
      ASYNC_VALIDATION_NOT_SUPPORTED: "Async validation is not supported",
      
      // System errors
      FAILED_TO_CREATE_VERIFICATION: "Failed to create verification",
      EMAIL_SEND_FAILED: "Failed to send email. Please try again later",
      SMS_SEND_FAILED: "Failed to send SMS. Please try again later",
      UNKNOWN_ERROR: "An unexpected error occurred"
    }
  },
  admin: {
    metadata: {
      title: "Lark CLI - Admin Dashboard",
      description: "Comprehensive admin dashboard for managing users, subscriptions, orders, and system analytics in your SaaS application.",
      keywords: "admin, dashboard, management, SaaS, analytics, users, subscriptions, orders"
    },
    dashboard: {
      title: "Admin Dashboard",
      accessDenied: "Access Denied",
      noPermission: "You don't have permission to access the admin dashboard",
      lastUpdated: "Last updated",
      metrics: {
        totalRevenue: "Total Revenue",
        totalRevenueDesc: "All time revenue",
        newCustomers: "Monthly New Customers",
        newCustomersDesc: "New customers this month",
        newOrders: "Monthly New Orders",
        newOrdersDesc: "New orders this month",
        fromLastMonth: "from last month"
      },
      chart: {
        monthlyRevenueTrend: "Monthly Revenue Trend",
        revenue: "Revenue",
        orders: "Orders"
      },
      todayData: {
        title: "Today's Data",
        revenue: "Revenue",
        newUsers: "New Users",
        orders: "Orders"
      },
      monthData: {
        title: "This Month's Data",
        revenue: "Monthly Revenue",
        newUsers: "Monthly New Users",
        orders: "Monthly Orders"
      },
      recentOrders: {
        title: "Recent Orders",
        orderId: "Order ID",
        customer: "Customer",
        plan: "Plan",
        amount: "Amount",
        provider: "Payment Method",
        status: "Status",
        time: "Time",
        total: "Total"
      }
    },
    users: {
      title: "User Management",
      subtitle: "Manage users, roles, and permissions",
      actions: {
        addUser: "Add User",
        editUser: "Edit User",
        deleteUser: "Delete User",
        banUser: "Ban User",
        unbanUser: "Unban User"
      },
      table: {
        columns: {
          id: "ID",
          name: "Name",
          email: "Email",
          role: "Role",
          phoneNumber: "Phone Number",
          emailVerified: "Email Verified",
          banned: "Banned",
          createdAt: "Created At",
          updatedAt: "Updated At",
          actions: "Actions"
        },
        actions: {
          editUser: "Edit User",
          deleteUser: "Delete User",
          clickToCopy: "Click to copy"
        },
        sort: {
          ascending: "Sort ascending",
          descending: "Sort descending",
          none: "Remove sorting"
        },
        noResults: "No users found",
        search: {
          searchBy: "Search by",
          searchPlaceholder: "Search {field}...",
          filterByRole: "Filter by role",
          allRoles: "All Roles",
          banStatus: "Ban status",
          allUsers: "All users",
          bannedUsers: "Banned",
          notBannedUsers: "Not banned",
          view: "View",
          toggleColumns: "Toggle columns"
        },
        pagination: {
          showing: "Showing {start} to {end} of {total} results",
          pageInfo: "Page {current} of {total}"
        },
        dialog: {
          banTitle: "Ban User",
          banDescription: "Are you sure you want to ban this user? They will not be able to access the application.",
          banSuccess: "User banned successfully",
          unbanSuccess: "User unbanned successfully",
          updateRoleSuccess: "User role updated successfully",
          updateRoleFailed: "Failed to update user role"
        }
      },
      banDialog: {
        title: "Ban User",
        description: "Are you sure you want to ban {userName}? They will not be able to access the application."
      },
      unbanDialog: {
        title: "Unban User",
        description: "Are you sure you want to unban {userName}? They will regain access to the application."
      },
      form: {
        title: "User Information",
        description: "Enter user details below",
        labels: {
          name: "Name",
          email: "Email",
          password: "Password",
          confirmPassword: "Confirm Password",
          role: "Role",
          image: "Profile Image",
          phoneNumber: "Phone Number",
          emailVerified: "Email Verified",
          phoneVerified: "Phone Verified",
          banned: "Banned",
          banReason: "Ban Reason"
        },
        placeholders: {
          name: "Enter user's name",
          email: "Enter user's email",
          password: "Enter password (min 8 characters)",
          confirmPassword: "Confirm password",
          selectRole: "Select role",
          image: "https://example.com/avatar.jpg",
          phoneNumber: "Enter phone number",
          banReason: "Reason for banning (optional)"
        },
        validation: {
          nameRequired: "Name is required",
          emailRequired: "Email is required",
          emailInvalid: "Please enter a valid email",
          passwordRequired: "Password is required",
          passwordMinLength: "Password must be at least 8 characters",
          passwordMismatch: "Passwords do not match",
          roleRequired: "Role is required"
        }
      },
      deleteDialog: {
        title: "Delete User",
        description: "Are you absolutely sure? This action cannot be undone. This will permanently delete the user account and remove all associated data."
      },
      messages: {
        createSuccess: "User created successfully",
        updateSuccess: "User updated successfully",
        deleteSuccess: "User deleted successfully",
        deleteError: "Failed to delete user",
        fetchError: "Failed to fetch user data",
        operationFailed: "Operation failed"
      }
    },
    orders: {
      title: "Orders",
      actions: {
        createOrder: "Create Order"
      },
      messages: {
        fetchError: "Failed to load orders. Please try again."
      },
      table: {
        noResults: "No orders found.",
        search: {
          searchBy: "Search by...",
          searchPlaceholder: "Search by {field}...",
          filterByStatus: "Filter by status",
          allStatus: "All Status",
          filterByProvider: "Payment provider",
          allProviders: "All Providers",
          stripe: "Stripe",
          wechat: "WeChat",
          creem: "Creem",
          alipay: "Alipay"
        },
        columns: {
          id: "Order ID",
          user: "User",
          amount: "Amount",
          plan: "Plan",
          status: "Status",
          provider: "Provider",
          providerOrderId: "Provider Order ID",
          createdAt: "Created At",
          actions: "Actions"
        },
        actions: {
          openMenu: "Open menu",
          actions: "Actions",
          viewOrder: "View order",
          refundOrder: "Refund order",
          clickToCopy: "Click to copy"
        },
        sort: {
          ascending: "Sort ascending",
          descending: "Sort descending",
          none: "Remove sorting"
        }
      },
      status: {
        pending: "Pending",
        paid: "Paid",
        failed: "Failed",
        refunded: "Refunded",
        canceled: "Canceled"
      }
    },
    blog: {
      title: "Blog Management",
      subtitle: "Create and manage blog posts",
      createPost: "Create Post",
      editPost: "Edit Post",
      actions: {
        newPost: "New Post"
      },
      messages: {
        fetchError: "Failed to load blog posts. Please try again.",
        createSuccess: "Post created successfully",
        updateSuccess: "Post updated successfully",
        deleteSuccess: "Post deleted successfully",
        deleteError: "Failed to delete post",
        operationFailed: "Operation failed",
        uploadSuccess: "Upload successful",
        uploadError: "Upload failed"
      },
      table: {
        noResults: "No posts found.",
        search: {
          searchPlaceholder: "Search by title...",
          filterByStatus: "Filter by status",
          allStatus: "All Status",
          draft: "Draft",
          published: "Published"
        },
        columns: {
          title: "Title",
          status: "Status",
          author: "Author",
          publishedAt: "Published At",
          createdAt: "Created At",
          actions: "Actions"
        },
        actions: {
          edit: "Edit",
          delete: "Delete"
        },
        sort: {
          ascending: "Sort ascending",
          descending: "Sort descending",
          none: "Remove sorting"
        }
      },
      form: {
        title: "Post Information",
        description: "Enter post details below",
        labels: {
          title: "Title",
          slug: "Slug",
          excerpt: "Excerpt",
          coverImage: "Cover Image",
          status: "Status",
          content: "Content"
        },
        placeholders: {
          title: "Enter post title",
          slug: "URL-friendly slug (auto-generated from title)",
          excerpt: "Brief summary of the post",
          coverImage: "Drag and drop or click to upload (max 2MB)",
          content: "Write your content in Markdown..."
        }
      },
      deleteDialog: {
        title: "Delete Post",
        description: "Are you absolutely sure? This action cannot be undone. This will permanently delete the post."
      }
    },
    credits: {
      title: "Credit Transactions",
      subtitle: "View all credit transactions across all users",
      messages: {
        fetchError: "Failed to load credit transactions. Please try again."
      },
      table: {
        noResults: "No credit transactions found.",
        search: {
          searchBy: "Search by...",
          searchPlaceholder: "Search by {field}...",
          filterByType: "Filter by type",
          allTypes: "All Types",
          purchase: "Purchase",
          consumption: "Consumption",
          refund: "Refund",
          bonus: "Bonus",
          adjustment: "Adjustment"
        },
        columns: {
          id: "Transaction ID",
          user: "User",
          type: "Type",
          amount: "Amount",
          balance: "Balance",
          description: "Description",
          createdAt: "Created At",
          metadata: "Metadata"
        },
        actions: {
          clickToCopy: "Click to copy",
          viewDetails: "View details"
        },
        sort: {
          ascending: "Sort ascending",
          descending: "Sort descending",
          none: "Remove sorting"
        },
        pagination: {
          showing: "Showing {start} to {end} of {total} results",
          pageInfo: "Page {current} of {total}"
        }
      },
      type: {
        purchase: "Purchase",
        consumption: "Consumption",
        refund: "Refund",
        bonus: "Bonus",
        adjustment: "Adjustment"
      }
    },
    subscriptions: {
      title: "Subscriptions",
      description: "Manage user subscriptions and billing",
      actions: {
        createSubscription: "Create Subscription"
      },
      messages: {
        fetchError: "Failed to load subscriptions. Please try again."
      },
      table: {
        showing: "Showing {from} to {to} of {total} results",
        noResults: "No subscriptions found.",
        rowsPerPage: "Rows per page",
        page: "Page",
        of: "of",
        view: "View",
        toggleColumns: "Toggle columns",
        goToFirstPage: "Go to first page",
        goToPreviousPage: "Go to previous page", 
        goToNextPage: "Go to next page",
        goToLastPage: "Go to last page",
        search: {
          searchLabel: "Search subscriptions",
          searchField: "Search field",
          statusLabel: "Status",
          providerLabel: "Provider",
          search: "Search",
          clear: "Clear",
          allStatuses: "All statuses",
          allProviders: "All providers",
          stripe: "Stripe",
          creem: "Creem",
          wechat: "WeChat",
          alipay: "Alipay",
          userEmail: "User Email",
          subscriptionId: "Subscription ID",
          userId: "User ID",
          planId: "Plan ID",
          stripeSubscriptionId: "Stripe Subscription ID",
          creemSubscriptionId: "Creem Subscription ID",
          placeholders: {
            userEmail: "Enter user email...",
            subscriptionId: "Enter subscription ID...",
            userId: "Enter user ID...",
            planId: "Enter plan ID...",
            stripeSubscriptionId: "Enter Stripe subscription ID...",
            creemSubscriptionId: "Enter Creem subscription ID...",
            default: "Enter search term..."
          },
          searchBy: "Search by...",
          searchPlaceholder: "Search by {field}...",
          filterByStatus: "Filter by status",
          filterByProvider: "Filter by provider",
          allStatus: "All Status",
          filterByPaymentType: "Payment type",
          allPaymentTypes: "All Types",
          active: "Active",
          canceled: "Canceled",
          expired: "Expired",
          trialing: "Trialing",
          inactive: "Inactive",
          oneTime: "One Time",
          recurring: "Recurring"
        },
        columns: {
          id: "Subscription ID",
          user: "Customer",
          plan: "Plan",
          status: "Status",
          paymentType: "Payment Type",
          provider: "Provider",
          periodStart: "Period Start",
          periodEnd: "Period End",
          cancelAtPeriodEnd: "Will Cancel",
          createdAt: "Created",
          updatedAt: "Updated",
          metadata: "Metadata",
          period: "Period",
          actions: "Actions"
        },
        actions: {
          openMenu: "Open menu",
          actions: "Actions",
          viewSubscription: "View subscription",
          cancelSubscription: "Cancel subscription",
          clickToCopy: "Click to copy"
        },
        sort: {
          ascending: "Sort ascending",
          descending: "Sort descending",
          none: "Remove sorting"
        }
      },
      status: {
        active: "Active",
        trialing: "Trialing",
        canceled: "Canceled",
        cancelled: "Canceled",
        expired: "Expired",
        inactive: "Inactive"
      },
      paymentType: {
        one_time: "One-time",
        recurring: "Recurring"
      }
    }
  },
  pricing: {
    metadata: {
      title: "Lark CLI - Pricing Plans",
      description: "Choose the perfect plan for your needs. Flexible pricing options including monthly, yearly, and lifetime subscriptions with premium features.",
      keywords: "pricing, plans, subscription, monthly, yearly, lifetime, premium, features"
    },
    title: "Pricing",
    subtitle: "Choose the plan that's right for you",
    description: "We offer both traditional time-based subscriptions (monthly/yearly/lifetime) and the AI-era popular credit system. Subscribe for unlimited access, or purchase credits and pay only for what you use.",
    cta: "Get started",
    recommendedBadge: "Recommended",
    lifetimeBadge: "One-time purchase, lifetime access",
    creditsBadge: "Credits",
    creditsUnit: "credits",
    tabs: {
      subscription: "Subscription",
      credits: "Credits"
    },
    features: {
      securePayment: {
        title: "Multi-Provider Security",
        description: "Support WeChat Pay, Stripe, Creem with enterprise-grade security"
      },
      flexibleSubscription: {
        title: "Flexible Payment Models",
        description: "Time-based subscription or AI-era credit system — choose your style"
      },
      globalCoverage: {
        title: "Global Payment Coverage", 
        description: "Multi-currency and regional payment methods for worldwide access"
      }
    },
    plans: {
      monthly: {
        name: "Monthly Plan",
        description: "Perfect for short-term projects",
        duration: "month",
        features: {
          "All premium features": "All premium features",
          "Priority support": "Priority support"
        }
      },
      yearly: {
        name: "Annual Plan",
        description: "Best value for long-term use",
        duration: "year",
        features: {
          "All premium features": "All premium features",
          "Priority support": "Priority support",
          "2 months free": "2 months free"
        }
      },
      lifetime: {
        name: "Lifetime",
        description: "One-time payment, lifetime access",
        duration: "lifetime",
        features: {
          "All premium features": "All premium features",
          "Priority support": "Priority support",
          "Free lifetime updates": "Free lifetime updates"
        }
      }
    }
  },
  payment: {
    metadata: {
      success: {
        title: "Lark CLI - Payment Successful",
        description: "Your payment has been processed successfully. Thank you for your subscription and welcome to our premium features.",
        keywords: "payment, success, subscription, confirmation, premium"
      },
      cancel: {
        title: "Lark CLI - Payment Cancelled",
        description: "Your payment was cancelled. You can retry the payment or contact our support team for assistance.",
        keywords: "payment, cancelled, retry, support, subscription"
      }
    },
    result: {
      success: {
        title: "Payment Successful",
        description: "Your payment has been processed successfully.",
        actions: {
          viewSubscription: "View Subscription",
          backToHome: "Back to Home"
        }
      },
      cancel: {
        title: "Payment Cancelled",
        description: "Your payment has been cancelled.",
        actions: {
          tryAgain: "Try Again",
          contactSupport: "Contact Support",
          backToHome: "Back to Home"
        }
      },
      failed: "Payment failed, please try again"
    },
    steps: {
      initiate: "Initialize",
      initiateDesc: "Prepare payment",
      scan: "Scan",
      scanDesc: "Scan QR code",
      pay: "Pay",
      payDesc: "Confirm payment"
    },
    scanQrCode: "Please scan the QR code with WeChat to complete the payment",
    confirmCancel: "Your payment is not complete. Are you sure you want to cancel?",
    orderCanceled: "Your order has been canceled"
  },
  subscription: {
    metadata: {
      title: "Lark CLI - My Subscription",
      description: "Manage your subscription plan, view billing history, and update payment methods in your subscription dashboard.",
      keywords: "subscription, billing, payment, plan, management, dashboard"
    },
    title: "My Subscription",
    overview: {
      title: "Subscription Overview",
      planType: "Plan Type",
      status: "Status",
      active: "Active",
      startDate: "Start Date",
      endDate: "End Date",
      progress: "Subscription Progress"
    },
    management: {
      title: "Subscription Management",
      description: "Manage your subscription, view billing history, and update payment methods through the customer portal.",
      manageSubscription: "Manage Subscription",
      changePlan: "Change Plan",
      redirecting: "Redirecting..."
    },
    noSubscription: {
      title: "No Active Subscription Found",
      description: "You currently don't have an active subscription plan.",
      viewPlans: "View Plans"
    }
  },
  dashboard: {
    metadata: {
      title: "Lark CLI - Dashboard",
      description: "Manage your account, subscriptions, and profile settings in your personalized dashboard.",
      keywords: "dashboard, account, profile, subscription, settings, management"
    },
    title: "Dashboard",
    description: "Manage your account and subscriptions",
    profile: {
      title: "Profile Information",
      noNameSet: "No name set",
      role: "Role:",
      emailVerified: "Email verified",
      editProfile: "Edit Profile",
      updateProfile: "Update Profile",
      cancel: "Cancel",
      form: {
        labels: {
          name: "Full Name",
          email: "Email Address",
          image: "Profile Image URL"
        },
        placeholders: {
          name: "Enter your full name",
          email: "Email address",
          image: "https://example.com/your-image.jpg"
        },
        emailReadonly: "Email address cannot be modified",
        imageDescription: "Optional: Enter a URL for your profile picture"
      },
      updateSuccess: "Profile updated successfully",
      updateError: "Failed to update profile. Please try again."
    },
    subscription: {
      title: "Subscription Status",
      status: {
        lifetime: "Lifetime",
        active: "Active",
        canceled: "Canceled",
        cancelAtPeriodEnd: "Canceling at Period End",
        pastDue: "Past Due",
        unknown: "Unknown",
        noSubscription: "No Subscription"
      },
      paymentType: {
        recurring: "Recurring",
        oneTime: "One-time"
      },
      lifetimeAccess: "You have lifetime access",
      expires: "Expires:",
      cancelingNote: "Your subscription will not renew and will end on:",
      noActiveSubscription: "You currently have no active subscription",
      manageSubscription: "Manage Subscription",
      viewPlans: "View Plans"
    },
    credits: {
      title: "Credit Balance",
      available: "Available Credits",
      totalPurchased: "Total Purchased",
      totalConsumed: "Total Used",
      recentTransactions: "Recent Transactions",
      buyMore: "Buy More Credits",
      types: {
        purchase: "Purchase",
        bonus: "Bonus",
        consumption: "Used",
        refund: "Refund",
        adjustment: "Adjustment"
      },
      descriptions: {
        ai_chat: "AI Chat",
        ai_image_generation: "AI Image Generation",
        ai_video_generation: "AI Video Generation",
        image_generation: "Image Generation",
        document_processing: "Document Processing",
        purchase: "Credit Purchase",
        bonus: "Bonus Credits",
        refund: "Credit Refund",
        adjustment: "Admin Adjustment"
      },
      table: {
        type: "Type",
        description: "Description",
        amount: "Amount",
        time: "Time"
      }
    },
    account: {
      title: "Account Details",
      memberSince: "Member since",
      phoneNumber: "Phone Number"
    },
    orders: {
      title: "Order History",
      status: {
        pending: "Pending",
        paid: "Paid",
        failed: "Failed",
        refunded: "Refunded",
        canceled: "Canceled"
      },
      provider: {
        stripe: "Stripe",
        wechat: "WeChat Pay",
        creem: "Creem",
        alipay: "Alipay"
      },
      noOrders: "No orders found",
      noOrdersDescription: "You haven't placed any orders yet",
      viewAllOrders: "View All Orders",
      orderDetails: {
        orderId: "Order ID",
        amount: "Amount",
        plan: "Plan",
        status: "Status",
        provider: "Payment Method",
        createdAt: "Created"
      },
      recent: {
        title: "Recent Orders",
        showingRecent: "Showing {count} most recent orders"
      },
      page: {
        title: "All Orders",
        description: "View and manage all your orders",
        backToDashboard: "Back to Dashboard",
        totalOrders: "Total {count} orders"
      }
    },
    linkedAccounts: {
      title: "Linked Accounts",
      connected: "Connected",
      connectedAt: "Connected:",
      noLinkedAccounts: "No linked accounts",
      providers: {
        credential: "Email & Password",
        google: "Google",
        github: "GitHub",
        facebook: "Facebook",
        apple: "Apple",
        discord: "Discord",
        wechat: "WeChat",
        "phone-number": "Phone Number"
      }
    },
    tabs: {
      profile: {
        title: "Profile",
        description: "Manage your personal information and avatar"
      },
      account: {
        title: "Account Management",
        description: "Password changes, linked accounts and security"
      },
      security: {
        title: "Security",
        description: "Password and security settings"
      },
      subscription: {
        description: "Manage your subscription plan and features"
      },
      credits: {
        title: "Credits",
        description: "View your credit balance and transactions"
      },
      orders: {
        description: "View your order history and transactions"
      },
      content: {
        profile: {
          title: "Profile",
          subtitle: "This is how others will see you on the site.",
          username: {
            label: "Username",
            value: "shadcn",
            description: "This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days."
          },
          email: {
            label: "Email",
            placeholder: "Select a verified email to display",
            description: "You can manage verified email addresses in your email settings."
          }
        },
        account: {
          title: "Account Settings",
          subtitle: "Manage your account settings and preferences.",
          placeholder: "Account settings content..."
        },
        security: {
          title: "Security Settings",
          subtitle: "Manage your password and security settings.",
          placeholder: "Security settings content..."
        }
      }
    },
    quickActions: {
      title: "Quick Actions",
      editProfile: "Edit Profile",
      accountSettings: "Account Settings",
      subscriptionDetails: "Subscription Details",
      getSupport: "Get Support",
      viewDocumentation: "View Documentation"
    },
    accountManagement: {
      title: "Account Management",
      changePassword: {
        title: "Change Password",
        description: "Update your account password",
        oauthDescription: "Password management is not available for social login accounts",
        button: "Change Password",
        dialogDescription: "Please enter your current password and choose a new one",
        form: {
          currentPassword: "Current Password",
          currentPasswordPlaceholder: "Enter your current password",
          newPassword: "New Password",
          newPasswordPlaceholder: "Enter new password (minimum 8 characters)",
          confirmPassword: "Confirm New Password",
          confirmPasswordPlaceholder: "Confirm your new password",
          cancel: "Cancel",
          submit: "Update Password"
        },
        success: "Password updated successfully",
        errors: {
          required: "Please fill in all required fields",
          mismatch: "New passwords do not match",
          minLength: "Password must be at least 8 characters long",
          failed: "Failed to update password. Please try again."
        }
      },
      deleteAccount: {
        title: "Delete Account",
        description: "Permanently delete your account and all associated data",
        button: "Delete Account",
        confirmTitle: "Delete Account",
        confirmDescription: "Are you absolutely sure you want to delete your account?",
        warning: "⚠️ This action cannot be undone",
        consequences: {
          data: "All your personal data will be permanently deleted",
          subscriptions: "Active subscriptions will be cancelled",
          access: "You will lose access to all premium features"
        },
        form: {
          cancel: "Cancel",
          confirm: "Yes, Delete My Account"
        },
        success: "Account deleted successfully",
        errors: {
          failed: "Failed to delete account. Please try again."
        }
      }
    },
    roles: {
      admin: "Administrator",
      user: "User"
    }
  },
  home: {
    metadata: {
      title: "Lark CLI - Official Command-Line Tool for Lark/Feishu | AI Agent-Powered Enterprise Productivity",
      description: "Lark CLI is the official open-source command-line tool for Lark/Feishu, covering 11 business domains, 200+ curated commands, and 19 AI Agent skills. Works with Claude Code, Cursor, and other mainstream AI coding tools.",
      keywords: "Lark CLI, Feishu CLI, lark-cli, Feishu API, AI Agent, Claude Code, Lark automation, Lark developer tools, Feishu productivity"
    },
    hero: {
      title: "Lark CLI: Command Your Lark with CLI",
      titlePrefix: "Lark CLI: Command Your Lark with ",
      titleHighlight: "CLI",
      titleSuffix: "",
      subtitle: "The official open-source CLI tool for Lark/Feishu. 11 business domains, 200+ curated commands, 19 AI Agent skills. Let AI operate Lark for you and double your productivity.",
      buttons: {
        purchase: "npm install -g @larksuite/cli",
        demo: "View on GitHub"
      },
      features: {
        lifetime: "MIT Open Source · Free to Use",
        earlyBird: "5,900+ GitHub Stars"
      }
    },
    features: {
      title: "Why Choose Lark CLI",
      subtitle: "From command line to AI Agent, Lark CLI provides the most efficient Lark automation solution for individual users and developers.",
      items: [
        {
          title: "11 Business Domains",
          description: "Covers Calendar, Instant Messaging, Cloud Docs, Base (Bitable), Sheets, Tasks, Mail, Wiki, Drive, Contacts, and Video Conferencing. One tool for all Lark operations.",
          className: "col-span-1 row-span-1"
        },
        {
          title: "3-Tier Command Architecture",
          description: "Quick commands (+ prefix) for daily use, API commands covering 100+ endpoints, and native API calls supporting 2,500+ Lark Open Platform interfaces for all complexity levels.",
          className: "col-span-1 row-span-1"
        },
        {
          title: "19 AI Agent Skills",
          description: "Built-in 19 structured Skills deeply integrated with Claude Code, Cursor, Qwen Code, and other mainstream AI coding tools. AI Agents can operate Lark with zero configuration.",
          className: "col-span-2 row-span-1"
        },
        {
          title: "Multi-AI Tool Support",
          description: "Native support for Claude Code, Qwen Code, Kimi Code, Cursor, and other mainstream AI coding tools. Let AI become your Lark super assistant.",
          className: "col-span-1 row-span-1"
        },
        {
          title: "Install and Go",
          description: "One npm install command, scan to authorize, and you're ready. From installation to your first API call in just 3 minutes. Supports both NPM install and source compilation.",
          className: "col-span-2 row-span-1"
        },
        {
          title: "200+ Curated Commands",
          description: "Every command is tested with real AI Agents. Clean parameters, smart defaults, structured output — covering all core Lark business scenarios.",
          className: "col-span-1 row-span-1"
        },
        {
          title: "MIT Open Source",
          description: "Built with Go and Python, fully open-source under MIT license. 5,900+ GitHub Stars with an active community ecosystem and continuous updates.",
          className: "col-span-1 row-span-1"
        },
        {
          title: "Enterprise-Grade Security",
          description: "Official OAuth authorization flow with multi-layer security: input injection protection, terminal output sanitization, system-level credential storage. Secure and reliable.",
          className: "col-span-1 row-span-1"
        }
      ],
      techStack: {
        title: "Tech Stack & Ecosystem",
        items: [
          "Go + Python",
          "NPM Global Install",
          "Claude Code",
          "Cursor",
          "Qwen Code",
          "19 AI Skills",
          "MIT License"
        ]
      }
    },
    applicationFeatures: {
      title: "Lark CLI Core Use Cases",
      subtitle: "From AI Agent collaboration to daily productivity boosts, Lark CLI fully automates your Lark workflows.",
      items: [
        {
          title: "AI Agent Collaboration",
          subtitle: "Let AI operate Lark for you",
          description: "Deeply integrated with Claude Code, Cursor, and other AI coding tools. AI Agents can automatically create tasks, send messages, manage schedules, and query meeting records — truly AI-driven Lark automation.",
          highlights: [
            "Deep Claude Code integration",
            "19 structured Skills",
            "Zero-config ready",
            "Natural language Lark operations"
          ],
          imageTitle: "AI Agent Collaboration"
        },
        {
          title: "Daily Productivity Boost",
          subtitle: "Lightning-fast command-line operations",
          description: "Complete daily Lark operations from the command line: schedule messages, batch-reply to unread messages, view upcoming meetings with auto-generated summaries, quickly create to-do tasks. Say goodbye to tedious UI clicks.",
          highlights: [
            "Scheduled messaging",
            "Meeting summary generation",
            "Batch task creation",
            "Unread message management"
          ],
          imageTitle: "Productivity Boost"
        },
        {
          title: "Wiki Management",
          subtitle: "AI-powered content organization",
          description: "Use AI + CLI to optimize your Lark Wiki content. Auto-organize document structure, generate summaries, batch-update pages. Transform your knowledge base from cluttered to systematic.",
          highlights: [
            "Wiki content optimization",
            "Document structure organization",
            "Batch page updates",
            "AI-assisted writing"
          ],
          imageTitle: "Wiki Management"
        }
      ]
    },
    roadmap: {
      title: "Lark CLI Getting Started Guide",
      subtitle: "From installation to first use — set up Lark CLI in 3 minutes and start commanding Lark from your terminal.",
      items: [
        {
          title: "Install CLI",
          description: "Install Lark CLI globally with a single NPM command. Source compilation is also available.",
          timeline: "Step 1",
          status: "completed",
          statusText: "npm install",
          features: ["npm install -g @larksuite/cli", "npx skills add larksuite/cli -y -g"]
        },
        {
          title: "Scan to Authorize",
          description: "Run lark-cli auth login, scan the QR code to authorize your Lark account, and select the permission scopes you need.",
          timeline: "Step 2",
          status: "completed",
          statusText: "Scan to Login",
          features: ["lark-cli auth login", "Select permission scopes", "OAuth secure authorization"]
        },
        {
          title: "Start Using",
          description: "Operate Lark directly from the command line: check your calendar, send messages, create tasks, manage documents — everything at your fingertips.",
          timeline: "Step 3",
          status: "completed",
          statusText: "Start Using",
          features: ["lark-cli calendar +agenda", "lark-cli im +send", "lark-cli task +create"]
        },
        {
          title: "AI Agent Integration",
          description: "After installing AI Agent Skills, tools like Claude Code can automatically operate Lark, enabling truly AI-driven workflows.",
          timeline: "Step 4",
          status: "in-progress",
          statusText: "Advanced Usage",
          features: ["Claude Code integration", "Natural language Lark operations", "Automated workflows"]
        },
        {
          title: "Explore More Scenarios",
          description: "Meeting summaries, Wiki optimization, scheduled messages, batch operations... Lark CLI's capabilities go far beyond your imagination.",
          timeline: "Keep Exploring",
          status: "planned",
          statusText: "Unlimited Possibilities",
          features: ["Meeting summaries", "Wiki management", "Batch operations", "Custom workflows"]
        },
        {
          title: "Community",
          description: "Join the Lark CLI community, share use cases, participate in creator contests, and exchange best practices with fellow developers.",
          timeline: "Community",
          status: "planned",
          statusText: "Join Us",
          features: ["Creator contests", "Use case sharing", "Best practices", "Community contributions"]
        }
      ],
      footer: "More use cases and tips — follow our blog for updates..."
    },
    stats: {
      title: "Lark CLI at a Glance",
      items: [
        {
          value: "5900",
          suffix: "+",
          label: "GitHub Stars"
        },
        {
          value: "11",
          suffix: "",
          label: "Business Domains"
        },
        {
          value: "200",
          suffix: "+",
          label: "Curated Commands"
        },
        {
          value: "19",
          suffix: "",
          label: "AI Agent Skills"
        }
      ]
    },
    testimonials: {
      title: "Lark CLI KOL Reviews",
      items: [
        {
          quote: "Lark CLI is now open source! I used Claude Code to tackle several enterprise scenarios — absolutely amazing! From calendar management to group message automation, CLI's efficiency is beyond imagination.",
          author: "Jiamu",
          role: "Tech KOL"
        },
        {
          quote: "I let AI directly operate my Lark, and it turned out to be more proficient than me. The Lark CLI + Claude Code combo is the strongest enterprise productivity tool I've ever seen.",
          author: "Uncle Huang",
          role: "Tech Creator"
        },
        {
          quote: "Lark CLI going open source opens the door for all AI tools. This isn't just a command-line tool — it's the infrastructure for the AI Agent era.",
          author: "Xiaohu",
          role: "Tech Commentator"
        }
      ]
    },
    domains: {
      title: "Lark CLI Covers 11 Business Domains",
      subtitle: "One CLI tool to manage all your Lark workflows — from messaging to meetings, from docs to databases.",
      items: [
        { icon: "MessageSquare", name: "Messenger", description: "Send messages, manage group chats, search conversations, download media" },
        { icon: "FileText", name: "Cloud Docs", description: "Create, edit, search documents with Markdown support" },
        { icon: "Database", name: "Base (Bitable)", description: "Manage tables, fields, records, views, dashboards, and automations" },
        { icon: "Table2", name: "Sheets", description: "CRUD operations, data append, search, and export spreadsheets" },
        { icon: "Calendar", name: "Calendar", description: "View agenda, create events, check availability, smart scheduling" },
        { icon: "CheckSquare", name: "Tasks", description: "Create tasks, manage subtasks, set reminders, update status" },
        { icon: "Mail", name: "Mail", description: "Browse, search, read, compose, and manage email drafts" },
        { icon: "BookOpen", name: "Wiki", description: "Manage knowledge spaces, organize document hierarchy" },
        { icon: "HardDrive", name: "Drive", description: "Upload/download files, manage permissions, handle comments" },
        { icon: "Users", name: "Contacts", description: "Search users by name, email, or phone, retrieve profiles" },
        { icon: "Video", name: "Meetings", description: "Search recordings, retrieve transcripts, meeting minutes and action items" }
      ]
    },
    commandShowcase: {
      title: "Three-Tier Command Architecture of Lark CLI",
      subtitle: "From quick shortcuts to full API access — Lark CLI adapts to every complexity level.",
      tiers: [
        {
          name: "Quick Commands",
          badge: "+ prefix",
          description: "User and AI Agent friendly, sensible defaults, formatted output",
          commands: [
            "lark-cli calendar +agenda",
            "lark-cli im +send --chat-id \"oc_xxx\" --text \"Hello\"",
            "lark-cli task +create --title \"Review PR\""
          ]
        },
        {
          name: "API Commands",
          badge: "100+ endpoints",
          description: "Auto-generated, curated commands mapped to platform API endpoints",
          commands: [
            "lark-cli calendar calendars list",
            "lark-cli im messages list --params '{...}'",
            "lark-cli docs documents create --body '{...}'"
          ]
        },
        {
          name: "Raw API Access",
          badge: "2500+ APIs",
          description: "Direct access to all Lark Open Platform APIs for full flexibility",
          commands: [
            "lark-cli api GET /open-apis/calendar/v4/calendars",
            "lark-cli api POST /open-apis/im/v1/messages --body '{...}'"
          ]
        }
      ]
    },
    useCases: {
      title: "Real-World Use Cases of Lark CLI",
      subtitle: "See how teams and individuals use Lark CLI + AI Agents to automate real business workflows.",
      items: [
        {
          title: "Meeting Follow-up Automation",
          description: "AI Agent extracts action items from meeting transcripts, auto-creates tasks, assigns owners, and schedules follow-up meetings — all through Lark CLI commands.",
          command: "\"Extract action items from yesterday's product sync and create tasks for each owner\""
        },
        {
          title: "Smart Multi-Timezone Scheduling",
          description: "Agent analyzes all participants' calendars across time zones, finds optimal meeting windows, and sends calendar invites — saving hours of back-and-forth.",
          command: "\"Find a time next week when the NYC, London, and Beijing teams are all available\""
        },
        {
          title: "Meeting Time Analytics Dashboard",
          description: "Auto-categorize two weeks of calendar events, populate a Bitable, and generate a dashboard showing time allocation across projects and meeting types.",
          command: "\"Analyze my calendar for the past 2 weeks and build a time-tracking dashboard\""
        },
        {
          title: "Intelligent Email Triage",
          description: "Scan unread emails, prioritize by importance, push summaries of critical items to group chat, auto-archive low-priority messages, and draft responses.",
          command: "\"Review my unread emails, summarize important ones in the project group, draft replies\""
        }
      ]
    },
    faq: {
      title: "Frequently Asked Questions about Lark CLI",
      items: [
        {
          question: "Is Lark CLI free to use?",
          answer: "Yes. Lark CLI is fully open-source under the MIT license. You can install it with npm and start using it for free. No registration or approval is needed."
        },
        {
          question: "What AI tools does Lark CLI support?",
          answer: "Lark CLI natively supports Claude Code, Cursor, Qwen Code, Kimi Code, Trae, and other mainstream AI coding tools through 19 built-in AI Agent Skills. AI Agents can operate Lark with zero additional configuration."
        },
        {
          question: "Is my data safe when using Lark CLI with AI Agents?",
          answer: "Lark CLI implements multiple security layers: input injection protection, terminal output sanitization, and OS-native keychain credential storage. However, AI Agents execute with your authenticated identity, so always review authorized scopes carefully."
        },
        {
          question: "How long does it take to set up Lark CLI?",
          answer: "About 3 minutes. Run npm install, scan the QR code to authorize, and execute your first command. The install-to-first-API-call flow is designed for minimal friction."
        },
        {
          question: "Does Lark CLI work with the international version of Lark?",
          answer: "Yes. Lark CLI supports both the international Lark platform and the China-based Feishu platform. The CLI automatically handles API endpoint differences."
        },
        {
          question: "Can I use Lark CLI without AI tools?",
          answer: "Absolutely. While the 19 AI Agent Skills are a highlight, Lark CLI works perfectly as a standalone command-line tool. The 200+ curated commands are designed for both human and AI agent use."
        }
      ]
    },
    community: {
      title: "Lark CLI Community",
      subtitle: "Real use cases and in-depth reviews from community members and KOLs",
      contest: {
        title: "Lark CLI Creator Contest",
        description: "Join the community, share your Lark CLI use cases, and win rewards.",
        cta: "Learn More"
      },
      cases: {
        title: "Community Cases",
        items: [
          {
            title: "CLI Beginner's Guide",
            description: "Everyday analogies to explain CLI concepts, helping non-programmers understand the difference between command line and GUI.",
            tag: "Beginner"
          },
          {
            title: "Lark CLI Feature Overview",
            description: "Complete user manual covering installation, initialization, user login, identity switching, and all core features.",
            tag: "Features"
          },
          {
            title: "Organize Lark Wiki with CLI",
            description: "Knowledge base reorganization plan: analyzed 31 child nodes and proposed consolidating into 7-10 categories.",
            tag: "Wiki"
          },
          {
            title: "Auto-Generate In-Depth Articles",
            description: "AI-driven research generating deep content covering 16 AI Builders' backgrounds, insights, and key perspectives.",
            tag: "Content"
          },
          {
            title: "Auto-Generate Event Plans",
            description: "Complete event planning generated from meeting minutes, covering 3-day schedules and presentation segments.",
            tag: "Automation"
          },
          {
            title: "Group Chat Content Curation",
            description: "Automatically curate and organize valuable content from group chats into structured knowledge bases.",
            tag: "Efficiency"
          }
        ]
      },
      kols: {
        title: "KOL In-Depth Reviews",
        items: [
          {
            quote: "Lark CLI is now open source! I used Claude Code to tackle several enterprise scenarios — absolutely amazing! From calendar management to group message automation, CLI's efficiency is beyond imagination.",
            author: "Jiamu",
            role: "Tech KOL"
          },
          {
            quote: "I let AI directly operate my Lark, and it turned out to be more proficient than me. The Lark CLI + Claude Code combo is the strongest enterprise productivity tool I've ever seen.",
            author: "Uncle Huang",
            role: "Tech Creator"
          },
          {
            quote: "Lark CLI going open source opens the door for all AI tools. This isn't just a command-line tool — it's the infrastructure for the AI Agent era.",
            author: "Xiaohu",
            role: "Tech Commentator"
          },
          {
            quote: "A comprehensive guide explaining what Lark and WeCom CLI are, how to use them, with 8 practical use cases from beginner to advanced.",
            author: "Lengyi",
            role: "Tech Blogger"
          }
        ]
      }
    },
    finalCta: {
      subtitle: "One command to install, three minutes to get started. Let AI become your Lark super assistant and double your productivity.",
      buttons: {
        purchase: "npm install -g @larksuite/cli",
        demo: "View on GitHub"
      }
    },
    footer: {
      copyright: "© {year} Lark CLI. All rights reserved.",
      description: "Lark CLI - Official Command-Line Tool for Lark/Feishu",
      disclaimer: "This website is a third-party community project and is not affiliated with Lark (Feishu) or ByteDance. Lark, Feishu, and related logos are trademarks of ByteDance.",
      links: {
        officialDocs: "Official Docs",
        github: "GitHub",
        community: "WaytoAGI Community"
      }
    },
    common: {
      demoInterface: "Feature Demo Interface",
      techArchitecture: "Enterprise-grade technical architecture, production-verified",
      learnMore: "Learn More"
    }
  },
  ai: {
    metadata: {
      title: "Lark CLI - AI Assistant",
      description: "Interact with powerful AI models including GPT-4, Qwen, and DeepSeek. Get AI assistance for coding, writing, and problem-solving.",
      keywords: "AI, assistant, chatbot, GPT-4, artificial intelligence, machine learning, conversation"
    },
    chat: {
      title: "AI Assistant",
      description: "A simple implementation of large model conversation with extensible design, using the latest technologies ai-sdk / ai-elements / streamdown to achieve very smooth chat effects, can be extended to more complex functions as needed",
      placeholder: "What can I help you with?",
      sending: "Sending...",
      thinking: "AI is thinking...",
      noMessages: "Start a conversation with the AI assistant",
      welcomeMessage: "Hello! I'm your AI assistant. How can I help you today?",
      toolCall: "Tool Call",
      providers: {
        title: "AI Provider",
        openai: "OpenAI",
        qwen: "Qwen",
        deepseek: "DeepSeek"
      },
      models: {
        "gpt-5": "GPT-5",
        "gpt-5-codex": "GPT-5 Codex",
        "gpt-5-pro": "GPT-5 Pro",
        "qwen-max": "Qwen Max",
        "qwen-plus": "Qwen Plus", 
        "qwen-turbo": "Qwen Turbo",
        "deepseek-chat": "DeepSeek Chat",
        "deepseek-coder": "DeepSeek Coder"
      },
      actions: {
        send: "Send",
        copy: "Copy",
        copied: "Copied!",
        retry: "Retry",
        dismiss: "Dismiss",
        newChat: "New Chat",
        clearHistory: "Clear History"
      },
      errors: {
        failedToSend: "Failed to send message. Please try again.",
        networkError: "Network error. Please check your connection.",
        invalidResponse: "Invalid response from AI. Please try again.",
        rateLimited: "Too many requests. Please wait a moment.",
        subscriptionRequired: "AI features require an active subscription",
        subscriptionRequiredDescription: "Upgrade to a premium plan to access AI chat features",
        insufficientCredits: "Insufficient Credits",
        insufficientCreditsDescription: "You need credits or a subscription to use AI chat. Purchase credits to continue."
      },
      history: {
        title: "Chat History",
        empty: "No chat history",
        today: "Today",
        yesterday: "Yesterday",
        thisWeek: "This Week",
        older: "Older"
      }
    },
    image: {
      metadata: {
        title: "Lark CLI - AI Image Generation",
        description: "Generate stunning images using AI. Powered by Qwen-Image, fal.ai Flux, OpenAI DALL-E, and Google Gemini.",
        keywords: "AI, image generation, DALL-E, Flux, Qwen, Gemini, text to image, art, creative"
      },
      title: "AI Image Generation",
      description: "Generate stunning images from text prompts using multiple AI providers",
      defaultPrompt: "A yellow Labrador wearing black and gold round sunglasses drinking tea with two yellow and white cats in a venue in Chengdu",
      prompt: "Prompt",
      promptPlaceholder: "Describe the image you want to generate...",
      negativePrompt: "Negative Prompt",
      negativePromptPlaceholder: "Describe what you don't want in the image...",
      negativePromptHint: "Describe elements to avoid in the generated image",
      generate: "Generate",
      generating: "Generating...",
      generatedSuccessfully: "Image generated successfully!",
      download: "Download",
      result: "Result",
      idle: "Idle",
      preview: "Preview",
      json: "JSON",
      whatNext: "What would you like to do next?",
      costInfo: "Your request will cost",
      perMegapixel: "per megapixel",
      credits: "credits",
      providers: {
        title: "Provider",
        qwen: "Aliyun BaiLian",
        fal: "fal.ai",
        openai: "OpenAI",
        gemini: "Google Gemini"
      },
      models: {
        "qwen-image-plus": "Qwen Image Plus",
        "qwen-image-max": "Qwen Image Max",
        "fal-ai/qwen-image-2512/lora": "Qwen Image 2512 Lora",
        "fal-ai/nano-banana-pro": "Nano Banana Pro",
        "fal-ai/flux/dev": "Flux Dev",
        "fal-ai/recraft/v3/text-to-image": "Recraft V3 Text to Image",
        "fal-ai/flux-pro/kontext": "Flux Pro Kontext",
        "fal-ai/bytedance/seedream/v3/text-to-image": "Bytedance Seedream V3 Text to Image",
        "dall-e-3": "DALL-E 3",
        "dall-e-2": "DALL-E 2",
        "gemini-3.1-flash-image-preview": "Nano Banana 2",
        "gemini-3-pro-image-preview": "Nano Banana Pro",
        "gemini-2.5-flash-image": "Nano Banana"
      },
      settings: {
        title: "Additional Settings",
        showMore: "More",
        showLess: "Less",
        imageSize: "Image Size",
        imageSizeHint: "Select the aspect ratio and resolution",
        numInferenceSteps: "Num Inference Steps",
        numInferenceStepsHint: "More steps = higher quality but slower",
        guidanceScale: "Guidance Scale",
        guidanceScaleHint: "How closely to follow the prompt",
        seed: "Seed",
        seedHint: "Use the same seed to reproduce results",
        random: "random",
        randomize: "Randomize",
        promptExtend: "Prompt Extend",
        promptExtendHint: "AI will enhance and expand your prompt",
        watermark: "Watermark",
        watermarkHint: "Add Qwen-Image watermark to the generated image",
        syncMode: "Sync Mode",
        syncModeHint: "Return base64 data instead of URL"
      },
      errors: {
        generationFailed: "Image generation failed",
        invalidPrompt: "Please enter a valid prompt",
        insufficientCredits: "Insufficient Credits",
        insufficientCreditsDescription: "You need credits to generate images. Purchase credits to continue.",
        networkError: "Network error. Please check your connection.",
        unknownError: "An unknown error occurred"
      }
    },
    video: {
      metadata: {
        title: "Lark CLI - AI Video Generation",
        description: "Generate stunning videos using AI. Powered by fal.ai, Volcengine Seedance, and Aliyun Wanxiang.",
        keywords: "AI, video generation, text to video, Seedance, Wanxiang, Luma, creative"
      },
      title: "AI Video Generation",
      description: "Generate stunning videos from text prompts using multiple AI providers",
      defaultPrompt: "A cat jumps directly from someone's lap onto the sofa",
      prompt: "Prompt",
      model: "Model",
      promptPlaceholder: "Describe the video you want to generate...",
      generate: "Generate Video",
      generating: "Generating video...",
      generatedSuccessfully: "Video generated successfully!",
      download: "Download Video",
      result: "Result",
      idle: "Enter a prompt to generate a video",
      whatNext: "What would you like to do next?",
      credits: "Credits",
      providers: {
        title: "Provider",
        fal: "fal.ai",
        volcengine: "Volcengine",
        aliyun: "Aliyun Wanxiang"
      },
      models: {
        "kling-video/v2.5-turbo/pro/text-to-video": "Kling 2.5 Turbo Pro (Text to Video)",
        "kling-video/v2.5-turbo/pro/image-to-video": "Kling 2.5 Turbo Pro (Image to Video)",
        "doubao-seedance-1-5-pro-251215": "Doubao Seedance 1.5 Pro",
        "doubao-seedance-1-0-pro-250528": "Doubao Seedance 1.0 Pro",
        "wan2.6-t2v": "Wanxiang 2.6 T2V",
        "wan2.5-t2v-turbo": "Wanxiang 2.5 T2V Turbo",
        "wan2.6-i2v-flash": "Wanxiang 2.6 I2V Flash"
      },
      inputMode: {
        label: "Generation Mode",
        text: "Text to Video",
        firstFrame: "First Frame",
        firstLastFrame: "First + Last Frame",
        firstLastFrameUnsupported: "Current provider supports first frame only"
      },
      frameInput: {
        title: "Frame Images",
        hint: "Use URL directly, or upload to Cloudflare R2.",
        firstFrameUrl: "First Frame URL",
        lastFrameUrl: "Last Frame URL",
        upload: "Upload",
        uploadedToR2: "Frame uploaded to R2",
        preview: "Image Preview",
        previewAlt: "First frame preview"
      },
      settings: {
        title: "Additional Settings",
        videoSize: "Video Size / Aspect Ratio",
        videoSizePlaceholder: "Select size",
        videoSizeHint: "Select the resolution or aspect ratio",
        duration: "Duration (seconds)",
        durationHint: "Length of the generated video",
        seed: "Seed",
        seedHint: "Use the same seed to reproduce results",
        random: "random",
        loop: "Loop",
        loopHint: "Whether the video should loop seamlessly",
        motionStrength: "Motion Strength",
        motionStrengthHint: "Controls how much motion appears in the video",
        promptExtend: "Prompt Extend",
        promptExtendHint: "AI will enhance and expand your prompt",
        watermark: "Watermark",
        watermarkHint: "Add watermark to the generated video"
      },
      errors: {
        generationFailed: "Video generation failed",
        invalidPrompt: "Please enter a valid prompt",
        firstFrameRequired: "Please provide a first frame URL",
        lastFrameRequired: "Please provide a last frame URL",
        unsupportedImageType: "Only JPEG/JPG/PNG/WEBP/BMP images are supported",
        imageTooLarge: "Image size must be less than or equal to 10MB",
        uploadFailed: "Upload failed",
        unsupportedModeForProvider: "Current provider does not support this generation mode",
        insufficientCredits: "Insufficient Credits",
        insufficientCreditsDescription: "You need credits to generate videos. Purchase credits to continue.",
        networkError: "Network error. Please check your connection.",
        unknownError: "An unknown error occurred",
        timeout: "Video generation timed out. Please try again."
      },
      resultPanel: {
        generatingHint: "Video generation may take 1-5 minutes...",
        videoTagUnsupported: "Your browser does not support the video tag."
      }
    }
  },
  premiumFeatures: {
    metadata: {
      title: "Lark CLI - Premium Features",
      description: "Explore all the premium features available with your subscription. Access advanced tools, AI assistance, and enhanced functionality.",
      keywords: "premium, features, advanced, tools, subscription, benefits, enhanced"
    },
    title: "Premium Features",
    description: "Thank you for your subscription! Here are all the premium features you can now access.",
    loading: "Loading...",
    subscription: {
      title: "Your Subscription",
      description: "Current subscription status and details",
      status: "Subscription Status",
      type: "Subscription Type",
      expiresAt: "Expires At",
      active: "Active",
      inactive: "Inactive",
      lifetime: "Lifetime Member",
      recurring: "Recurring Subscription"
    },
    badges: {
      lifetime: "Lifetime Member"
    },
    demoNotice: {
      title: "🎯 SaaS Template Demo Page",
      description: "This is a demo page for testing route protection. Only paying users can access this page, demonstrating how to implement subscription-level access control in your SaaS application."
    },
    features: {
      userManagement: {
        title: "Advanced User Management",
        description: "Complete user profile management and custom settings"
      },
      aiAssistant: {
        title: "AI Smart Assistant",
        description: "Advanced artificial intelligence features to boost productivity"
      },
      documentProcessing: {
        title: "Unlimited Document Processing",
        description: "Process any number and size of document files"
      },
      dataAnalytics: {
        title: "Detailed Data Analytics",
        description: "In-depth data analysis and visualization reports"
      }
    },
    actions: {
      accessFeature: "Access Feature"
    }
  },
  validators: {
    user: {
      name: {
        minLength: "Name must be at least {min} characters",
        maxLength: "Name must be less than {max} characters"
      },
      email: {
        invalid: "Please enter a valid email address"
      },
      image: {
        invalidUrl: "Please enter a valid URL"
      },
      password: {
        minLength: "Password must be at least {min} characters",
        maxLength: "Password must be less than {max} characters",
        mismatch: "Passwords don't match"
      },
      countryCode: {
        required: "Please select country/region"
      },
      phoneNumber: {
        required: "Please enter phone number",
        invalid: "Invalid phone number format"
      },
      verificationCode: {
        invalidLength: "Verification code must be {length} characters"
      },
      id: {
        required: "User ID is required"
      },
      currentPassword: {
        required: "Current password is required"
      },
      confirmPassword: {
        required: "Please confirm your password"
      },
      deleteAccount: {
        confirmRequired: "You must confirm account deletion"
      }
    },
    blog: {
      title: {
        required: "Title is required",
        maxLength: "Title must be less than {max} characters",
      },
      slug: {
        maxLength: "Slug must be less than {max} characters",
        invalid: "Slug can only contain lowercase letters, numbers, and hyphens",
      },
      excerpt: {
        maxLength: "Excerpt must be less than {max} characters",
      },
      coverImage: {
        invalidUrl: "Please enter a valid URL for the cover image",
      },
      status: {
        invalid: "Status must be either draft or published",
      },
    },
  },
  countries: {
    china: "China",
    usa: "United States",
    uk: "United Kingdom",
    japan: "Japan",
    korea: "South Korea",
    singapore: "Singapore",
    hongkong: "Hong Kong",
    macau: "Macau",
    australia: "Australia",
    france: "France",
    germany: "Germany",
    india: "India",
    malaysia: "Malaysia",
    thailand: "Thailand"
  },
  header: {
    navigation: {
      ai: "AI Demo",
      premiumFeatures: "Premium Features",
      pricing: "Pricing",
      upload: "Upload",
      demos: "Demos",
      demosDescription: "Explore example features",
      blog: "Blog",
      useCases: "Use Cases",
      quickstart: "Quick Start",
      changelog: "Changelog"
    },
    demos: {
      ai: {
        title: "AI Chat",
        description: "LLM chat with extensible design, multi-provider support. Login required."
      },
      aiImage: {
        title: "AI Image Generation",
        description: "AI image generation with extensible design, multi-provider support. Login required."
      },
      aiVideo: {
        title: "AI Video Generation",
        description: "AI video generation with extensible design, multi-provider support. Login required."
      },
      premium: {
        title: "Premium Features",
        description: "Route protection demo. Only paid users can access this page."
      },
      upload: {
        title: "File Upload",
        description: "File upload with extensible design, multi-provider support. Login required."
      }
    },
    auth: {
      signIn: "Sign In",
      getStarted: "Get Started",
      signOut: "Sign Out"
    },
    userMenu: {
      dashboard: "Dashboard",
      profile: "Profile",
      settings: "Settings",
      personalSettings: "Personal Settings",
      adminPanel: "Admin Panel"
    },
    language: {
      switchLanguage: "Switch Language",
      english: "English",
      chinese: "Chinese"
    },
    mobile: {
      themeSettings: "Theme Settings",
      languageSelection: "Language Selection"
    }
  },
  docs: {
    home: {
      title: "Lark CLI Docs",
      subtitle: "Built with Fumadocs",
      description: "A static site project based on Fumadocs, perfect for documentation, blogs, and static pages.",
      cta: {
        docs: "Read Docs",
        blog: "Visit Blog"
      }
    },
    nav: {
      docs: "Docs",
      blog: "Blog"
    },
    blog: {
      title: "Blog",
      description: "Latest articles and updates from the Lark CLI team",
      allPosts: "All Posts",
      previousPage: "← Previous",
      nextPage: "Next →",
      back: "← Back to Blog",
      noPosts: "No posts yet"
    }
  },
  upload: {
    title: "Upload Files",
    description: "Upload images to cloud storage",
    providerTitle: "Storage Provider",
    providerDescription: "Select your preferred cloud storage provider",
    providers: {
      oss: "Alibaba Cloud OSS",
      ossDescription: "China-optimized storage",
      s3: "Amazon S3",
      s3Description: "Global cloud storage",
      r2: "Cloudflare R2",
      r2Description: "Zero egress fees",
      cos: "Tencent Cloud COS",
      cosDescription: "China cloud storage"
    },
    uploadTitle: "Upload Image",
    uploadDescription: "Drag and drop image or click to browse. Max 1MB.",
    dragDrop: "Drag & drop file here",
    orClick: "Or click to browse (max 1MB)",
    browseFiles: "Browse files",
    clearAll: "Clear all",
    uploadedTitle: "Uploaded Files",
    uploadedDescription: "{count} file(s) uploaded successfully",
    uploading: "Uploading...",
    viewFile: "View",
    uploaded: "Uploaded",
    errors: {
      maxFiles: "You can only upload 1 file",
      imageOnly: "Only image files are allowed",
      fileTooLarge: "File size must be less than 1MB"
    }
  },
  blog: {
    metadata: {
      title: "Lark CLI Blog - Tutorials, Use Cases & Best Practices",
      description: "Lark CLI tutorials, use case sharing, and best practices. Learn how to efficiently operate Lark with the command line and AI Agents.",
      keywords: "Lark CLI tutorial, Lark CLI usage, Lark automation, AI Agent Lark, Claude Code Lark"
    },
    title: "Blog",
    subtitle: "Tutorials, use cases & best practices",
    readMore: "Read More",
    publishedOn: "Published on",
    by: "by",
    noPosts: "No posts yet. Check back soon!",
    backToBlog: "Back to Blog"
  }
} as const; 