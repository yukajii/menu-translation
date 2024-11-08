import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const LegalPage = () => {
  const { document } = useParams();
  const [content, setContent] = useState('');
  
  useEffect(() => {
    // Instead of loading from markdown files, we'll use a content object
    const legalContent = {
      'terms-of-service': {
        title: 'Terms of Service',
        content: `Last updated: November 8, 2024

# Terms of Service

Last updated: November 8, 2024

## 1. Introduction

Welcome to MenuTap ("we," "our," or "us"). By accessing or using our website (menutap.biz) and services, you agree to these Terms of Service ("Terms"). Please read them carefully.

## 2. Services Description

MenuTap provides multilingual menu translation and digital menu hosting services for restaurants and food service establishments. Our services include:
- Menu translation into multiple languages
- Digital menu hosting
- QR code generation
- Menu management system

## 3. Account Registration

3.1. To use our services, you must create an account and provide accurate information.

3.2. You are responsible for maintaining the security of your account credentials.

3.3. You must be at least 18 years old to create an account.

## 4. Subscription and Payments

4.1. Service fees are billed on a monthly basis according to your selected plan.

4.2. All fees are non-refundable unless otherwise stated.

4.3. We reserve the right to modify our pricing with 30 days notice.

## 5. Content and Copyright

5.1. You retain all rights to your original menu content.

5.2. You grant us a license to translate, display, and distribute your menu content as necessary to provide our services.

5.3. You warrant that your menu content does not infringe on any third-party rights.

## 6. Service Availability

6.1. We strive to maintain 99.9% uptime but do not guarantee uninterrupted service.

6.2. We may perform maintenance with advance notice.

## 7. Termination

7.1. You may cancel your subscription at any time.

7.2. We may terminate or suspend your account for violations of these Terms.

## 8. Limitation of Liability

8.1. Our services are provided "as is" without warranties of any kind.

8.2. We are not liable for any indirect, incidental, or consequential damages.

## 9. Changes to Terms

We may update these Terms at any time. Continued use of our services constitutes acceptance of any changes.

## 10. Contact Information

For questions about these Terms, contact us at:
Email: contact@menutap.biz`
      },
      'privacy-policy': {
        title: 'Privacy Policy',
        content: `Last updated: November 8, 2024

# Privacy Policy

Last updated: November 8, 2024

## 1. Introduction

This Privacy Policy describes how MenuTap ("we," "our," or "us") collects, uses, and shares your personal information when you use our website and services.

## 2. Information We Collect

### 2.1. Information You Provide
- Account information (name, email, business details)
- Menu content and images
- Payment information
- Communication preferences

### 2.2. Automatically Collected Information
- Device information
- Usage data
- IP address
- Cookies and similar technologies

## 3. How We Use Your Information

We use your information to:
- Provide our translation and menu hosting services
- Process payments
- Send service updates and marketing communications
- Improve our services
- Comply with legal obligations

## 4. Information Sharing

We do not sell your personal information. We may share your information with:
- Service providers who assist in our operations
- Legal authorities when required by law
- Business partners with your consent

## 5. Data Security

We implement appropriate technical and organizational measures to protect your data. However, no internet transmission is completely secure.

## 6. Your Rights

You have the right to:
- Access your personal information
- Correct inaccurate data
- Request deletion of your data
- Opt-out of marketing communications
- Export your data

## 7. Cookies

We use cookies to:
- Maintain your session
- Remember your preferences
- Analyze website usage
- Improve our services

You can control cookies through your browser settings.

## 8. International Data Transfers

We process data in the European Union but may transfer data to other countries with appropriate safeguards.

## 9. Children's Privacy

Our services are not directed to children under 16. We do not knowingly collect information from children.

## 10. Changes to This Policy

We may update this Privacy Policy periodically. We will notify you of significant changes.

## 11. Contact Us

For privacy-related questions:
Email: contact@menutap.biz
`
      },
      'cookie-notice': {
        title: 'Cookie Notice',
        content: `Last updated: November 8, 2024

# Cookie Notice

Last updated: November 8, 2024

## What Are Cookies

Cookies are small text files stored on your device when you visit our website. They help make your online experience better.

## How We Use Cookies

We use cookies to:
- Keep you signed in
- Remember your language preferences
- Understand how you use our service
- Improve our website

## Types of Cookies We Use

### Essential Cookies
- Required for basic website functionality
- Cannot be disabled

### Preference Cookies
- Remember your settings and preferences
- Can be disabled, but may affect website functionality

### Analytics Cookies
- Help us understand how visitors use our site
- Can be disabled without affecting core functionality

## Managing Cookies

You can control cookies through your browser settings. Note that disabling certain cookies may limit your ability to use some features of our service.

## Updates to This Notice

We may update this Cookie Notice periodically. Please check back regularly for changes.

## Questions?

Contact us at contact@menutap.biz
`
      }
    };

    // Set the content based on the requested document
    const documentContent = legalContent[document];
    if (documentContent) {
      setContent(documentContent);
    }
  }, [document]);

  if (!content) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
            <h1 className="text-3xl font-bold mb-6">Document Not Found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
          <div className="prose prose-blue max-w-none whitespace-pre-line">
            {content.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;