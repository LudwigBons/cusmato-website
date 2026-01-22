export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  readingTime: number; // in minutes
  featured?: boolean;
}

// Helper function to calculate reading time (approximate 200 words per minute)
function calculateReadingTime(content: string): number {
  const words = content.split(/\s+/).length;
  return Math.ceil(words / 200);
}

export const blogPostsEN: BlogPost[] = [
  {
    slug: "70-procent-support-emails-automatiseren",
    title: "How to automate 70% of your support emails without losing quality",
    date: "2025-01-15",
    excerpt: "Practical guide to automating repetitive support questions without losing the human touch. Learn how to identify the right questions and set up automated workflows.",
    tags: ["Automation", "Email"],
    readingTime: 6,
    featured: true,
    content: `Imagine: your support team receives dozens of emails daily with the same questions. "Where is my order?", "How can I return this?", "What is my order status?". It takes your team hours per day to answer these questions manually, while the answers are often almost identical.

## Why automate?

The numbers don't lie. Research shows that on average 60-70% of all support questions are repetitive questions. These are questions that can be perfectly automated, giving your team time for more complex matters that truly need human attention.

But there's an important nuance: automating shouldn't mean quality goes down. On the contrary, with the right approach you can deliver even better, faster and more consistent answers than manually possible.

## Step 1: Identify repetitive questions

Start by analyzing your current support inbox. Which questions come up most often? Make a top 10 list of:

- Order status questions
- Return procedures
- Delivery time information
- Product questions
- Account changes
- Password reset requests
- Payment questions

For most e-commerce businesses, it quickly becomes clear that order status and returns are the top 2. These are perfect candidates for automation.

## Step 2: Choose the right questions for automation

Not all questions are suitable for automation. Start with questions that:
- Have objective answers (no complex personal situations)
- Occur frequently (at least 5x per week)
- Can be answered unambiguously (no gray areas)
- Can be integrated with your systems (orders, inventory, etc.)

Example of a good question for automation:
"What is the status of my order #12345?"

Example of a question that's better handled manually:
"I have a problem with my order and am dissatisfied with the service. I'd like to speak with a manager."

## Step 3: Build automated workflows

With Cusmato you can build workflows that:
1. Automatically look up order status in your e-commerce platform (Shopify, WooCommerce, Magento)
2. Generate a personalized answer in your tone of voice
3. Inform the customer about the current status
4. Optionally add extra information (track & trace link, expected delivery date)

Imagine a customer asks: "Where is my order?"

Cusmato can:
- Extract the order number from the email (or ask if it's missing)
- Look up the order status in your system
- Automatically generate an answer:

"Dear [Name],

Thank you for your question about order #[ORDER]. I've looked up the status for you.

Your order was shipped on [DATE] via [SHIPPING METHOD] and is expected today. You can track the delivery via this link: [TRACKING LINK].

Do you have any other questions? Let me know!

Best regards,
[Your company name]"

This answer is:
- Personal (uses customer name and order number)
- Accurate (directly looked up from your system)
- Informative (contains all relevant details)
- Consistent (always the same quality)

## Step 4: Implement approval workflows

For important interactions you can add an approval step. Cusmato then first generates the answer, your team reviews it (or not, depending on your settings), and then it's automatically sent.

This gives you the best of both worlds:
- Automatic efficiency for 90% of cases
- Human control where needed

## Common mistakes in automation

1. Automating too much too quickly
   Start small, with 2-3 question types. Learn from the results before expanding.

2. No fallback mechanism
   Always have a way to escalate to human support if automation fails.

3. Forgetting to monitor
   Regularly check the automated answers. Are customers satisfied? Are they getting the right information?

4. Too generic language
   Use Cusmato's tone of voice training to make answers really sound like your brand.

## Results you can expect

Companies that implement Cusmato see on average:
- 60-70% less manual email answering
- 80% faster response times (answers within minutes instead of hours)
- Higher customer satisfaction through consistency and speed
- Lower support costs through more efficient workflows

## Conclusion

Automating 70% of your support emails is no longer future music, it's reality. With the right tooling and approach you can achieve this without compromising quality. In fact, quality often improves through the speed and consistency that automation provides.

Ready to get started? Schedule a free introduction and see how Cusmato works for your company.`,
  },
  {
    slug: "tone-of-voice-in-ai",
    title: "Tone of voice in AI: how to make answers really sound like your brand",
    date: "2025-01-10",
    excerpt: "How do you train AI to communicate in your unique brand personality? Practical tips and examples for consistent, authentic AI language use.",
    tags: ["AI & quality", "Tone of voice"],
    readingTime: 8,
    featured: true,
    content: `One of the biggest objections to AI customer service is the loss of brand personality. "It sounds so robotic," you often hear. "It doesn't feel like our brand." And that's true if you don't make an effort to train your AI in your unique tone of voice.

But the good news is: this is completely preventable. With the right approach, AI communication can even sound more authentic than many manually written answers.

## Why tone of voice is so important

Your brand is not just what you sell, it's how you communicate. The way you address customers, word choice and tone make your brand recognizable and trusted.

When customers receive an AI answer that doesn't sound like your brand, they feel it immediately. It feels impersonal, distant, and reduces trust in your brand.

Conversely: when an AI answer perfectly matches your brand, customers often don't even notice it's automated. They feel understood, valued, and get the feeling that your company truly cares about them.

## Step 1: Define your tone of voice

Before you can train AI, you first need to be clear about what your tone of voice exactly is. This is often harder than it sounds.

Ask yourself:
- Are we formal or informal?
- Are we friendly or business-like?
- Do we use a lot of humor or keep it serious?
- Are we brief and concise or detailed?
- Which words do we use, and which do we avoid?

Example 1: Formal, business brand
"Dear Sir/Madam [Name],

In response to your request regarding order #[ORDER] we have verified the status for you.

Your order was shipped on [DATE] and should arrive on the indicated delivery date.

For questions we refer you to our customer service number.

Best regards,
[Company name]"

Example 2: Friendly, informal brand
"Hi [Name]! 👋

Great that you're reaching out! I've looked up your order #[ORDER] for you.

Good news: your package is on its way on [DATE]! You can track it via this link: [TRACKING].

If you have any other questions, definitely let us know!

Cheers,
[Team name]"

Both answers provide the same information, but sound completely different. This difference makes your brand.

## Step 2: Train your AI with examples

Cusmato learns your tone of voice by looking at existing communication. Give it access to:
- Existing customer service emails you see as examples
- Your website copy
- Social media posts
- Marketing materials

The more examples, the better. Aim for at least 20-30 examples of different situations.

## Step 3: Test and refine

After initial training it's important to test. Ask Cusmato to generate a few example answers and evaluate them:
- Does it sound like your brand?
- Are there words or phrases that don't fit?
- Are you missing certain elements (emoticons, specific greetings, etc.)?

Adjust where needed and train again.

## Step 4: Create guidelines

Document your tone of voice guidelines, so your team and any new team members also stay consistent:

DO's:
- Always use the customer name in your opening sentence
- Be friendly but professional
- Always end with an offer for further help
- Use active sentence structure ("I've looked up your order" instead of "Your order has been looked up")

DON'Ts:
- Don't use jargon without explanation
- Don't be too formal if your brand is informal
- Don't make promises you can't keep
- Don't blindly copy from other companies

## Example: Tone of voice transformation

Before: Generic AI answer
"Thank you for your email. We have received your question and will respond as soon as possible. Your question will be processed in order of receipt."

After: Personalized brand answer
"Hi [Name],

Thanks for your message! I've received your question about [SUBJECT] and I'm getting right to work on it.

[PERSONAL ANSWER TO QUESTION]

Let me know if you have any other questions, I'm happy to help further.

Cheers,
[Team name]"

## Common pitfalls

1. Too robotic language
   Avoid standard phrases like "Thank you for your message, we appreciate your feedback." These sound the same for everyone.

2. No personality
   Let your AI also show the human side of your brand. Is your company funny? Show that. Are you serious and reliable? Make that clear.

3. Forgetting to update
   Your tone of voice evolves. Update your AI training regularly to keep up with changes in your brand communication.

4. Too much automation without control
   Especially in the beginning: regularly check if the tone of voice is correct. Adjust where needed.

## Conclusion

Tone of voice is not something you "add on", it's essential for authentic brand communication. With the right training and attention, AI can perfectly reflect your brand personality.

The result? Customers feel understood and valued, even when they receive an automated answer. And that's exactly what you want.

Curious how Cusmato learns your tone of voice? Schedule a free introduction and we'll show you.`,
  },
  {
    slug: "whatsapp-email-workflow",
    title: "WhatsApp + email support: one workflow, less pressure on your team",
    date: "2025-01-05",
    excerpt: "How to combine WhatsApp and email support in one automated workflow. Practical tips for managing multiple channels without chaos.",
    tags: ["Chat", "Email", "Integrations"],
    readingTime: 7,
    content: `More and more companies are using both WhatsApp and email for customer service. It makes sense: customers want contact via the channel that suits them best. But for support teams this means more channels to monitor, more chaos, and ultimately more work pressure.

At least, if you do it manually.

With automation you can manage both channels from one central workflow. This not only saves time, but also ensures customers are helped consistently, regardless of which channel they contact you through.

## The challenge of multi-channel support

When you work manually, each additional channel means:
- An extra inbox to monitor
- A different interface to learn
- Risk of inconsistent answers between channels
- More context switching (email → WhatsApp → email)
- Higher work pressure on your team

Example situation:
You have a customer who asks via WhatsApp: "Where is my order?"
An hour later the same customer emails: "I haven't received a response to my WhatsApp message yet."

Without a central workflow you don't see this as the same customer, and you might give different answers or worse: no answer because you thought it was already handled.

## The solution: one central workflow

With Cusmato you can:
- Manage email and WhatsApp from one dashboard
- Recognize customers across channels
- Use the same automation for both channels
- Ensure consistency in tone of voice and information

## Step 1: Integrate both channels

Start by connecting both channels to Cusmato:
- Gmail/Outlook for email support
- WhatsApp Business API for WhatsApp support

This can be done within one day. After connecting you'll see both channels in the same dashboard.

## Step 2: Set up workflows for both channels

Many workflows work identically for both channels. For example:

Workflow: Look up order status
- Trigger: Customer asks "where is my order" or "order status" (via email or WhatsApp)
- Action: Cusmato looks up order number in message
- Action: Retrieves order status from your e-commerce platform
- Action: Generates answer in your tone of voice
- Action: Sends via the same channel where the question came in

This means one workflow that automatically works for both channels.

## Step 3: Recognize customers across channels

When a customer contacts you both via email and WhatsApp, your system should be able to see this as the same person. Cusmato automatically links:
- Email address
- Phone number
- Order history
- Previous interactions

This way you immediately see the full context, regardless of which channel someone contacts you through.

## Example workflow: Return request

Scenario: Customer wants to return a product

Via email:
"Dear [Name],

I've received your return request for order #[ORDER]. No problem!

To return it you just need to:
1. Put the product in the original packaging
2. Print the return label I'm adding here: [RETURN LABEL]
3. Drop off the package at a PostNL point

Once we receive the product, we'll process your refund within 5 business days.

Let us know if you have questions!

Cheers,
[Team]"

Via WhatsApp:
"Hi [Name]! 👋

I see you want to return [PRODUCT], no problem.

Send me your order number, and I'll send you the return label right away. Or you can find it here: [LINK]

Within 5 business days after receipt you'll have your money back! 💰

Questions? Let us know!"

Both answers:
- Provide the same information
- Sound like your brand
- Are adapted to the channel (WhatsApp slightly more informal)
- Come from the same workflow

## Step 4: Monitor and optimize

Regularly look at:
- Which questions come up most often via which channel?
- Are there differences in response times between channels?
- Can certain workflows be optimized?

Examples of insights:
- WhatsApp questions are often faster and shorter → adjust your workflows
- Email questions are often more complex → ensure good escalation to human support
- Order status questions come mainly via WhatsApp → focus automation there

## Common mistakes

1. Different answers per channel
   Ensure information is consistent, even if the tone adapts to the channel.

2. No central monitoring
   Use one dashboard to monitor both channels, otherwise you miss the overview.

3. Forgetting to test on both channels
   Always test workflows on both channels to make sure they work well.

4. Keeping too much manual work
   Automate where possible. Even with automation you still have enough control.

## Results you can expect

Companies that use Cusmato for multi-channel support see:
- 50% less time spent monitoring channels
- Consistent customer experience across all channels
- 40% faster response times through automation
- Lower work pressure on support teams

## Conclusion

Multi-channel support doesn't have to be chaotic. With the right automation you can manage email and WhatsApp from one workflow, giving your team less pressure and customers better help.

Ready to automate both channels? Schedule a free introduction and discover how it works.`,
  },
  {
    slug: "integratie-met-shopify-en-woocommerce",
    title: "Integration with Shopify and WooCommerce: Automate order management in 3 steps",
    date: "2024-12-28",
    excerpt: "Step-by-step guide to connecting Cusmato to your Shopify or WooCommerce webshop. Automate order status, returns and customer questions.",
    tags: ["Integrations", "E-commerce"],
    readingTime: 6,
    content: `E-commerce businesses receive hundreds of questions daily about orders: "Where is my package?", "Can I cancel this order?", "How do I return a product?". These questions are time-consuming to answer manually, but perfect to automate with a good integration.

Cusmato connects directly with Shopify and WooCommerce, allowing you to automatically retrieve order information and help customers directly without manually searching in your system.

## Why an e-commerce integration?

Without integration, each order status question means:
1. Customer sends email
2. Your team opens e-commerce platform
3. Manually searches for order
4. Copies information
5. Writes answer
6. Sends email

Time per question: 3-5 minutes

With integration:
1. Customer sends email
2. Cusmato recognizes order number
3. Automatically retrieves status
4. Generates and sends answer

Time per question: 0 minutes (fully automated)

## Step 1: Connect your webshop

For Shopify:
- Go to Cusmato dashboard → Integrations
- Click "Shopify" → "Connect"
- Follow the OAuth flow (similar to connecting apps in Shopify)
- Give Cusmato access to orders and customer data

For WooCommerce:
- Install Cusmato plugin in WordPress
- Generate API keys in WooCommerce → Settings → Advanced → REST API
- Enter keys in Cusmato
- Test the connection

Both processes take less than 10 minutes.

## Step 2: Set up workflows

After connecting you can create workflows that use order data.

Example workflow: Automatic order status
Trigger: Email contains "order status" or "where is my"
1. Cusmato extracts order number from email (or asks if it's missing)
2. Retrieves order data via Shopify/WooCommerce API
3. Checks status: paid, shipped, delivered, etc.
4. Generates personal answer with:
   - Current status
   - Expected delivery date (if shipped)
   - Track & trace link (if available)
   - Any delays

Example answer:
"Dear [Name],

Thank you for your question about order #[ORDER].

Your order was shipped on [DATE] via [SHIPPER] and is expected on [DELIVERY DATE].

You can track the delivery via: [TRACKING LINK]

Do you have any questions? Let us know!

Cheers,
[Team]"

## Step 3: Automate returns

Return requests are perfect to automate:

Workflow: Return request
Trigger: Email contains "return" or "send back"
1. Cusmato identifies order and product
2. Checks return policy (within 14 days, original packaging, etc.)
3. Generates return label (via shipper integration)
4. Sends instructions to customer

Example:
"Hi [Name]!

No problem that you want to return [PRODUCT]. I've arranged everything for you:

1. Print the return label: [RETURN LABEL LINK]
2. Stick it on the original box
3. Drop off at a [SHIPPER] point

Once we receive it, we'll process your refund within 5 business days.

Questions? Let us know! 👋"

## Advanced workflows

With the integration you can also create more complex workflows:

Cancellations:
- Check if order can still be cancelled
- Give options: full cancellation or change
- Process automatically if possible

Inventory questions:
- Customer asks: "Is this product in stock?"
- Cusmato retrieves inventory status
- Answers directly with availability

Order changes:
- Customer wants to change address
- Check if this is still possible
- Update order automatically (or ask for approval)

## Common problems and solutions

Problem: Order number not recognized
Solution: Explicitly ask for order number if it's missing in first message
"Can you send me your order number? Then I can look up the status right away."

Problem: Customer has multiple orders
Solution: Show overview of recent orders and ask which one is meant

Problem: Order doesn't exist (wrong number)
Solution: Friendly notification + ask for correction
"The order number you sent I can't find. Can you check if the number is correct? You'll find it in your order confirmation."

## Monitoring and optimization

After implementation it's important to monitor:
- Which workflows are used most?
- Are there many questions that can't be automated?
- Are customers getting the right information?

Optimize based on data. Do you see for example that 80% of questions are about returns? Make sure that workflow is perfect.

## Conclusion

A Shopify or WooCommerce integration is essential for e-commerce businesses that want to automate their customer service. It saves time, improves response times, and ensures consistency.

The setup is simple and takes less than a day. After that you immediately have access to automation that saves your team hours per day.

Ready to connect your webshop? Schedule a free introduction and we'll help you get started.`,
  },
  {
    slug: "veiligheid-en-compliance",
    title: "Security and compliance: Why data control is crucial for AI customer service",
    date: "2024-12-20",
    excerpt: "How Cusmato handles data privacy, security and compliance. Why in-house AI is important for sensitive customer data.",
    tags: ["Security", "Compliance"],
    readingTime: 5,
    content: `When you use AI for customer service, you automatically process sensitive customer data: email addresses, order information, personal preferences. This data must be protected, not only because the law requires it, but also because customers trust you.

At Cusmato we take security and compliance seriously. In this article we explain how we ensure this and why this is important for your business.

## Why security is important

Customer data is valuable, both for you and for others. Hackers are constantly looking for access to systems with customer data. A data breach can:
- Expose your customers to risk
- Damage your reputation
- Result in high fines (up to 4% of annual revenue under GDPR)
- Lose customer trust

That's why it's crucial to work with an AI platform that has security as a priority.

## In-house AI means control

Many AI customer service tools use external AI services (like OpenAI's GPT). This means your customer data is sent to external servers, outside your control.

Cusmato uses in-house developed AI. This means:
- Your data stays within your control
- No data is shared with external parties
- You can decide yourself where data is stored
- Full transparency about what happens with data

## GDPR compliance

The General Data Protection Regulation (GDPR) imposes strict rules for processing personal data. Cusmato is fully GDPR compliant:

Data minimization:
- We only collect data needed for the service
- Old data is automatically cleaned up according to retention periods

Right of access:
- Customers can request what data we have
- We offer export functionality for data portability

Right to be forgotten:
- Customers can request deletion of their data
- This is executed immediately within the set deadlines

Security measures:
- Encryption in transit (SSL/TLS)
- Encryption at rest
- Regular security audits
- Access controls and logging

## Security measures in detail

Encryption:
All data is encrypted, both during transport and at rest. This means that even if someone gains access to the servers, the data is unreadable without the right keys.

Access controls:
- Only authorized users have access
- All actions are logged
- Two-factor authentication where possible

Regular audits:
- Security scans are regularly performed
- External audits by security experts
- Proactive monitoring of threats

## What does this mean for you?

When you use Cusmato:
- You comply with GDPR requirements
- Your customers know their data is safe
- You don't have to worry about data breaches
- You have full control over your data

## Frequently asked questions

Question: Is my data shared with others?
Answer: No. Your data is only for you and stays within your account. We never share data with external parties.

Question: Where is data stored?
Answer: Data is stored on secure servers in the EU, in accordance with GDPR requirements.

Question: What if I stop using Cusmato?
Answer: You can always export all your data or have it deleted. We don't keep anything longer than necessary.

Question: How often are security audits done?
Answer: We perform monthly security scans and annual external audits.

## Conclusion

Security and compliance are not optional, they're essential. At Cusmato we take this seriously, so you can focus on helping customers without worrying about data risks.

Want to know more about our security measures? Contact us and we'll be happy to discuss it.`,
  },
  {
    slug: "roi-van-geautomatiseerde-klantenservice",
    title: "The ROI of automated customer service: How do you calculate the savings?",
    date: "2024-12-15",
    excerpt: "Concrete calculation examples and methods to calculate the ROI of AI customer service. When does automation pay for itself?",
    tags: ["ROI", "Automation"],
    readingTime: 6,
    content: `If you invest in automated customer service, you want to know: does it pay for itself? And if so, how quickly?

In this article we give you concrete tools to calculate the ROI of Cusmato for your business. No vague promises, but real numbers.

## What does customer service cost now?

To calculate ROI, you first need to know what you're spending now. These are the most important cost factors:

Time:
- Average time per email/chat: 5-10 minutes
- Number of questions per day: for example 50
- Total time per day: 50 × 7 minutes = 350 minutes = 5.8 hours
- Hourly rate support employee: €25/hour
- Daily costs: €145
- Monthly costs: €145 × 22 work days = €3,190

Quality:
- Inconsistent answers lead to recurring questions
- Errors that need to be corrected
- Missed response times lead to dissatisfied customers

Scalability:
- More customers = more questions = more staff needed
- Each new employee = extra costs

## What do you save with automation?

With Cusmato you can automate on average 60-70% of all questions. This means:

Example calculation:
Current situation:
- 50 questions per day
- 5.8 hours work per day
- €3,190 per month

With Cusmato:
- 50 questions per day
- 60% automated = 30 questions automatic
- 40% manual = 20 questions = 2.3 hours work per day
- Savings: 3.5 hours per day = €87.50 per day = €1,925 per month

Cusmato costs: €299/month (Growth plan)

Net savings: €1,925 - €299 = €1,626 per month

ROI: (€1,626 / €299) × 100 = 544% ROI per month

## Other savings

In addition to direct time savings there are also indirect savings:

Faster response times:
- Automatic answers within minutes instead of hours
- Higher customer satisfaction
- Fewer escalations

Consistency:
- Fewer errors from human mistakes
- No forgotten answers
- Always the same quality

Scalability:
- 100 questions per day? No problem.
- No extra staff needed
- Costs stay the same

## Calculate ROI for your business

Use this formula:

1. Calculate current monthly costs:
   Number of questions per month × average time per question (in hours) × hourly rate

2. Calculate savings:
   Current costs × automation percentage (60-70%)

3. Subtract Cusmato costs:
   Savings - Cusmato monthly costs

4. Calculate ROI:
   (Net savings / Cusmato costs) × 100

Example:
- 1,000 questions per month
- 7 minutes per question = 0.12 hours
- €25/hour
- Current costs: 1,000 × 0.12 × €25 = €3,000

Savings (60%): €3,000 × 0.6 = €1,800
Cusmato costs: €299
Net savings: €1,501
ROI: (€1,501 / €299) × 100 = 502% per month

## When does it pay for itself?

In the above example Cusmato pays for itself in less than a month. But this depends on:
- Number of questions you receive
- Time per question
- Hourly rate of your team
- Automation percentage you achieve

General rule: if you receive more than 30 questions per day, automation usually pays for itself within 1-2 months.

## Hidden costs of NOT automating

In addition to direct costs there are also costs of not automating:

Missed opportunities:
- Too long response times → customers go to competitor
- Inconsistent service → lower customer loyalty
- No 24/7 availability → international customers walk away

Growth barrier:
- Team can't handle more questions without extra staff
- Costs grow linearly with number of customers
- Difficult to scale

## Conclusion

Automated customer service often has an ROI of 400-600% per month. This means the investment pays for itself within 1-2 months, and then provides pure savings.

Plus you get quality improvement for free: faster response times, more consistency, and scalability.

Ready to calculate your ROI? Schedule a free introduction and we'll help you calculate the numbers for your business.`,
  },
];
