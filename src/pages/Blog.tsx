import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Science Behind PRP: Why Your Own Blood is the Best Anti-Aging Treatment",
    excerpt: "Discover how Platelet-Rich Plasma therapy harnesses your body's natural healing power to rejuvenate skin and stimulate hair growth. Learn about the science, benefits, and what to expect from this revolutionary treatment.",
    content: `Platelet-Rich Plasma (PRP) therapy has revolutionized the world of aesthetic medicine, offering a natural approach to skin rejuvenation and hair restoration. But what exactly makes this treatment so effective?

## Understanding PRP

PRP is derived from your own blood, which is processed to concentrate the platelets - tiny cells that contain powerful growth factors. These growth factors are responsible for tissue repair, collagen production, and cellular regeneration.

## The Science Behind the Magic

When PRP is injected into the skin or scalp, it triggers a cascade of healing responses:

- **Collagen Stimulation**: Growth factors stimulate fibroblasts to produce new collagen, improving skin texture and reducing fine lines
- **Angiogenesis**: New blood vessel formation improves nutrient delivery to tissues
- **Cellular Regeneration**: Stem cells are activated, promoting tissue repair and renewal

## Benefits for Face and Hair

**For Facial Rejuvenation:**
- Reduces fine lines and wrinkles
- Improves skin texture and tone
- Minimizes pore size
- Enhances overall skin radiance

**For Hair Restoration:**
- Stimulates dormant hair follicles
- Increases hair thickness and density
- Reduces hair loss progression
- Promotes healthier hair growth

## What to Expect

The treatment involves a simple blood draw, processing in a centrifuge, and precise injection into target areas. Most patients see initial improvements within 2-4 weeks, with optimal results appearing after 3-6 months.

At Sky Skin Clinic, our experienced practitioners ensure safe, effective PRP treatments tailored to your specific needs.`,
    author: "Dr. Sarah Johnson",
    date: "2025-01-10",
    readTime: "5 min read",
    category: "PRP Treatments",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: 2,
    title: "HIFU vs. Traditional Facelifts: The Non-Invasive Revolution",
    excerpt: "Compare High-Intensity Focused Ultrasound (HIFU) with surgical facelifts. Understand the benefits, results, and why HIFU is becoming the preferred choice for skin tightening and lifting.",
    content: `The quest for youthful, lifted skin no longer requires going under the knife. High-Intensity Focused Ultrasound (HIFU) has emerged as a game-changing alternative to traditional surgical facelifts.

## What is HIFU?

HIFU uses focused ultrasound energy to target deep layers of skin, stimulating collagen production and tightening tissues from within. This non-invasive treatment delivers precise energy to the same depths addressed in surgical facelifts.

## HIFU vs. Surgical Facelifts

**HIFU Advantages:**
- No surgery or incisions required
- Minimal downtime (return to work same day)
- Natural-looking results
- Lower cost than surgery
- No anesthesia risks
- Gradual improvement over 3-6 months

**Surgical Facelift Considerations:**
- More dramatic results for severe sagging
- Longer-lasting effects (10+ years)
- Significant downtime (2-4 weeks)
- Higher cost and surgical risks
- Immediate but initially swollen results

## Who is a Good Candidate for HIFU?

HIFU works best for individuals with:
- Mild to moderate skin laxity
- Early signs of aging
- Desire for natural-looking results
- Preference for non-invasive treatments

## The HIFU Experience

During treatment, ultrasound energy is delivered in precise layers beneath the skin. You may feel slight discomfort, but no anesthesia is required. The procedure typically takes 60-90 minutes.

Results develop gradually as new collagen forms, with optimal lifting and tightening visible after 3-6 months.`,
    author: "Dr. Michael Chen",
    date: "2025-01-08",
    readTime: "4 min read",
    category: "HIFU Treatments",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: 3,
    title: "Skin Boosters vs. Fillers: Choosing the Right Injectable for Your Goals",
    excerpt: "Navigate the world of injectable treatments. Learn the differences between skin boosters, dermal fillers, and Botox to make informed decisions about your skincare journey.",
    content: `The world of injectable treatments can be overwhelming. With options like skin boosters, dermal fillers, and Botox, how do you choose what's right for your skin goals?

## Understanding the Differences

**Skin Boosters:**
- Hydrate and improve skin quality
- Contain hyaluronic acid for deep moisturization
- Enhance skin texture and radiance
- Provide subtle, natural improvements

**Dermal Fillers:**
- Add volume to specific areas
- Restore lost facial volume
- Smooth deep wrinkles and folds
- Create more dramatic structural changes

**Botox:**
- Relaxes muscles to prevent wrinkles
- Treats dynamic lines (expression lines)
- Prevents new wrinkle formation
- Provides temporary muscle relaxation

## Choosing the Right Treatment

**For Skin Quality and Hydration:**
Skin boosters are ideal for improving overall skin texture, hydration, and radiance. They're perfect for younger patients or those seeking subtle enhancement.

**For Volume Loss:**
Dermal fillers excel at restoring lost volume in cheeks, lips, and temples. They're ideal for addressing age-related volume loss.

**For Expression Lines:**
Botox is the gold standard for treating forehead lines, crow's feet, and frown lines caused by muscle movement.

## Combination Approaches

Many patients benefit from combining treatments:
- Botox for expression lines + fillers for volume
- Skin boosters for overall quality + targeted fillers
- Full-face approach addressing multiple concerns

## What to Expect

All injectable treatments at Sky Skin Clinic are performed by experienced practitioners using premium products. Results vary by treatment type, with Botox showing effects in 3-7 days, fillers providing immediate volume, and skin boosters improving quality over several weeks.`,
    author: "Dr. Emily Rodriguez",
    date: "2025-01-05",
    readTime: "6 min read",
    category: "Skin Boosters",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: 4,
    title: "The Ultimate Guide to Post-Treatment Skincare: Maximizing Your Results",
    excerpt: "Learn essential aftercare tips to maximize your aesthetic treatment results. From PRP to HIFU, discover how proper skincare can enhance and prolong your investment in beauty.",
    content: `Your aesthetic treatment is just the beginning. Proper aftercare is crucial for maximizing results and ensuring long-lasting benefits from your investment in professional skincare.

## Universal Post-Treatment Principles

**Sun Protection is Non-Negotiable:**
- Use SPF 30+ daily, even indoors
- Reapply every 2 hours when outdoors
- Wear protective clothing and hats
- Avoid peak sun hours (10 AM - 4 PM)

**Gentle Skincare Approach:**
- Use mild, fragrance-free cleansers
- Avoid harsh scrubs or exfoliants initially
- Pat skin dry, don't rub
- Introduce active ingredients gradually

## Treatment-Specific Aftercare

**After PRP Treatments:**
- Avoid makeup for 24 hours
- No strenuous exercise for 48 hours
- Keep treated area clean and dry
- Expect mild redness for 1-3 days

**After HIFU:**
- Mild swelling is normal for 1-2 days
- Avoid extreme temperatures
- Stay hydrated
- Results develop over 3-6 months

**After Injectable Treatments:**
- No lying down for 4 hours post-Botox
- Avoid touching or massaging treated areas
- Sleep elevated for the first night
- Ice can help reduce swelling

## Building Your Home Routine

**Essential Products:**
1. Gentle cleanser
2. Hydrating serum (hyaluronic acid)
3. Moisturizer appropriate for your skin type
4. Broad-spectrum sunscreen
5. Antioxidant serum (Vitamin C)

**Advanced Ingredients (introduce gradually):**
- Retinoids for anti-aging
- Peptides for collagen support
- Niacinamide for pore refinement
- Alpha hydroxy acids for exfoliation

## Professional Maintenance

Regular professional treatments enhance and maintain results:
- Monthly facials for ongoing skin health
- Quarterly skin assessments
- Annual treatment plan reviews
- Seasonal skincare adjustments

Remember, consistency is key. Your skincare routine should complement and enhance your professional treatments for optimal, long-lasting results.`,
    author: "Dr. Lisa Park",
    date: "2025-01-03",
    readTime: "7 min read",
    category: "Skincare Tips",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: 5,
    title: "Microneedling: The Secret to Flawless Skin Texture",
    excerpt: "Explore the transformative power of microneedling for acne scars, fine lines, and overall skin rejuvenation. Learn how this minimally invasive treatment can revolutionize your skincare routine.",
    content: `Microneedling has become one of the most sought-after treatments for achieving smooth, radiant skin. This minimally invasive procedure offers remarkable results for various skin concerns with minimal downtime.

## What is Microneedling?

Microneedling, also known as collagen induction therapy, uses fine needles to create controlled micro-injuries in the skin. This process triggers the body's natural healing response, stimulating collagen and elastin production.

## Benefits of Microneedling

**Skin Texture Improvement:**
- Reduces appearance of acne scars
- Smooths fine lines and wrinkles
- Minimizes pore size
- Improves overall skin texture

**Enhanced Product Absorption:**
- Creates channels for better serum penetration
- Maximizes benefits of skincare products
- Allows for targeted treatment delivery

## The Treatment Process

During your microneedling session at Sky Skin Clinic:
1. Skin is thoroughly cleansed and numbed
2. Sterile needles create controlled micro-channels
3. Healing serums are applied for enhanced results
4. Treatment typically takes 30-60 minutes

## What to Expect

**Immediate Effects:**
- Mild redness (similar to sunburn)
- Slight swelling for 24-48 hours
- Skin may feel tight or sensitive

**Long-term Results:**
- Visible improvement in 4-6 weeks
- Continued enhancement over 3-6 months
- Optimal results with series of treatments

## Aftercare Essentials

- Avoid sun exposure for 48 hours
- Use gentle, fragrance-free products
- Apply broad-spectrum SPF daily
- Stay hydrated and avoid harsh ingredients

Microneedling is suitable for most skin types and can be combined with other treatments for enhanced results.`,
    author: "Dr. Amanda Foster",
    date: "2025-01-12",
    readTime: "4 min read",
    category: "Advanced Treatments",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Chemical Peels: Your Path to Radiant, Youthful Skin",
    excerpt: "Discover the transformative power of chemical peels for addressing sun damage, hyperpigmentation, and signs of aging. Learn which peel is right for your skin type and concerns.",
    content: `Chemical peels are among the most effective treatments for achieving dramatic skin improvements. From light refresher peels to deeper resurfacing treatments, there's a peel for every skin concern and type.

## Understanding Chemical Peels

Chemical peels use controlled acids to remove damaged skin layers, revealing fresh, healthy skin underneath. The depth of the peel determines the intensity of results and recovery time.

## Types of Chemical Peels

**Light Peels (Superficial):**
- Glycolic acid, lactic acid, or fruit acids
- Minimal downtime
- Improves skin texture and brightness
- Perfect for maintenance treatments

**Medium Peels:**
- TCA (Trichloroacetic acid)
- Addresses deeper pigmentation
- Reduces fine lines and sun damage
- 5-7 days recovery time

**Deep Peels:**
- Phenol-based solutions
- Dramatic results for severe damage
- Significant downtime required
- Professional supervision essential

## Benefits of Chemical Peels

**Skin Rejuvenation:**
- Reduces fine lines and wrinkles
- Improves skin tone and texture
- Minimizes age spots and sun damage
- Stimulates collagen production

**Acne and Scarring:**
- Unclogs pores and reduces breakouts
- Improves acne scarring
- Balances oil production
- Refines skin texture

## Choosing the Right Peel

Your skin type, concerns, and lifestyle determine the best peel for you:

**For Sensitive Skin:** Light enzyme or lactic acid peels
**For Sun Damage:** Medium-depth TCA peels
**For Anti-Aging:** Combination of glycolic and retinol peels
**For Acne:** Salicylic acid-based peels

## Pre and Post-Peel Care

**Before Treatment:**
- Avoid retinoids 1 week prior
- Use sunscreen consistently
- Inform practitioner of all medications
- Follow pre-peel skincare regimen

**After Treatment:**
- Gentle cleansing only
- Moisturize frequently
- Strict sun protection
- Avoid picking or peeling skin

At Sky Skin Clinic, we customize each peel to your specific needs, ensuring optimal results with minimal risk.`,
    author: "Dr. James Wilson",
    date: "2025-01-14",
    readTime: "5 min read",
    category: "Advanced Treatments",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: 7,
    title: "Laser Hair Removal: Everything You Need to Know",
    excerpt: "Get the facts about laser hair removal - from how it works to what to expect during treatment. Learn why this popular procedure is the gold standard for permanent hair reduction.",
    content: `Laser hair removal has revolutionized the way we approach unwanted hair. This safe, effective treatment offers long-lasting results for virtually any area of the body.

## How Laser Hair Removal Works

Laser technology targets the melanin (pigment) in hair follicles. The laser energy is absorbed by the pigment, heating and destroying the follicle while leaving surrounding skin unharmed.

## Benefits of Laser Hair Removal

**Long-lasting Results:**
- Permanent hair reduction (80-95%)
- Fewer ingrown hairs
- Smoother skin texture
- Cost-effective long-term solution

**Precision and Speed:**
- Targets specific areas accurately
- Treats multiple hairs simultaneously
- Quick treatment sessions
- Minimal discomfort

## Treatment Areas

Laser hair removal is effective on:
- Face (upper lip, chin, cheeks)
- Body (legs, arms, underarms)
- Bikini and Brazilian areas
- Back and chest
- Any area with unwanted hair

## What to Expect

**During Treatment:**
- Cooling gel applied to skin
- Protective eyewear provided
- Laser pulses feel like rubber band snaps
- Sessions last 15 minutes to 1 hour

**Number of Sessions:**
- 6-8 treatments typically needed
- Sessions spaced 4-8 weeks apart
- Hair grows in cycles, requiring multiple treatments
- Touch-ups may be needed annually

## Pre-Treatment Preparation

- Avoid sun exposure for 2 weeks
- Shave treatment area 24 hours before
- No waxing or plucking for 6 weeks prior
- Discontinue certain medications if advised

## Post-Treatment Care

- Apply cool compresses if needed
- Use gentle, fragrance-free products
- Avoid sun exposure and tanning
- Moisturize regularly
- Hair will shed naturally over 2-3 weeks

## Ideal Candidates

Laser hair removal works best on:
- Dark, coarse hair
- Light to medium skin tones
- Realistic expectations about results
- Commitment to full treatment series

Modern laser technology has expanded treatment options for darker skin tones and lighter hair colors. Consult with our experts to determine if you're a good candidate.`,
    author: "Dr. Rachel Martinez",
    date: "2025-01-16",
    readTime: "6 min read",
    category: "Laser Treatments",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: 8,
    title: "IV Glutathione: The Master Antioxidant for Radiant Skin",
    excerpt: "Discover the powerful benefits of IV Glutathione therapy for skin brightening, anti-aging, and overall wellness. Learn how this master antioxidant can transform your skin from within.",
    content: `IV Glutathione therapy has gained popularity as a powerful treatment for skin brightening and overall wellness. This master antioxidant offers benefits that go far beyond traditional skincare approaches.

## What is Glutathione?

Glutathione is a powerful antioxidant naturally produced by the body. It plays crucial roles in:
- Detoxification processes
- Immune system support
- Cellular repair and protection
- Skin health and pigmentation

## Benefits of IV Glutathione

**Skin Brightening:**
- Reduces melanin production
- Evens skin tone
- Diminishes dark spots and hyperpigmentation
- Creates a natural, healthy glow

**Anti-Aging Properties:**
- Neutralizes free radicals
- Supports collagen production
- Reduces oxidative stress
- Slows cellular aging process

**Overall Wellness:**
- Boosts immune system
- Improves energy levels
- Supports liver detoxification
- Enhances mental clarity

## Why IV Administration?

Intravenous delivery offers superior benefits:
- 100% bioavailability
- Bypasses digestive system
- Higher concentrations reach cells
- Faster, more noticeable results

## The Treatment Experience

**During Your Session:**
- Comfortable reclining position
- IV insertion by trained professional
- Treatment takes 30-45 minutes
- Relaxing, spa-like environment

**Treatment Schedule:**
- Initial series: 2-3 sessions per week
- Maintenance: Weekly or bi-weekly
- Results visible after 4-6 sessions
- Cumulative benefits over time

## Who Can Benefit?

IV Glutathione is ideal for:
- Those seeking skin brightening
- Individuals with hyperpigmentation
- People wanting anti-aging benefits
- Anyone looking to boost overall wellness

## Safety and Considerations

Glutathione is generally safe with minimal side effects:
- Naturally occurring in the body
- Well-tolerated by most people
- Professional administration ensures safety
- Consultation required before treatment

## Combining with Other Treatments

IV Glutathione enhances results when combined with:
- Chemical peels for enhanced brightening
- Microneedling for improved absorption
- PRP treatments for comprehensive rejuvenation
- Regular skincare maintenance

## Maintaining Results

To maximize and maintain benefits:
- Follow recommended treatment schedule
- Use quality skincare products
- Maintain healthy lifestyle habits
- Protect skin from sun damage
- Stay hydrated and eat antioxidant-rich foods

At Sky Skin Clinic, our IV Glutathione treatments are administered by experienced professionals in a comfortable, safe environment.`,
    author: "Dr. Priya Sharma",
    date: "2025-01-18",
    readTime: "5 min read",
    category: "IV Therapy",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true
  },
  {
    id: 9,
    title: "Hydrafacial: The Ultimate Skin Hydration Experience",
    excerpt: "Experience the revolutionary Hydrafacial treatment that cleanses, extracts, and hydrates your skin in one session. Discover why this treatment is perfect for all skin types and concerns.",
    content: `The Hydrafacial has become the gold standard in facial treatments, offering immediate results with no downtime. This revolutionary treatment combines cleansing, exfoliation, extraction, and hydration in one comprehensive session.

## What Makes Hydrafacial Special?

The Hydrafacial uses patented Vortex-Fusion technology to:
- Deep cleanse and exfoliate
- Extract impurities painlessly
- Infuse skin with nourishing serums
- Provide instant, visible results

## The 3-Step Process

**Step 1: Cleanse + Peel**
- Gentle exfoliation removes dead skin cells
- Reveals fresh, healthy skin layer
- Prepares skin for extraction

**Step 2: Extract + Hydrate**
- Painless suction removes blackheads and impurities
- Simultaneously hydrates with nourishing serums
- No discomfort or irritation

**Step 3: Fuse + Protect**
- Infuses skin with antioxidants and peptides
- Provides long-lasting hydration
- Protects against environmental damage

## Benefits for All Skin Types

**For Oily/Acne-Prone Skin:**
- Deep pore cleansing
- Reduces blackheads and congestion
- Balances oil production
- Minimizes breakouts

**For Dry/Dehydrated Skin:**
- Intense hydration boost
- Improves skin barrier function
- Reduces flakiness and tightness
- Restores natural glow

**For Aging Skin:**
- Stimulates collagen production
- Reduces fine lines appearance
- Improves skin texture and tone
- Provides antioxidant protection

**For Sensitive Skin:**
- Gentle, non-irritating treatment
- Customizable serum selection
- Soothes inflammation
- Strengthens skin barrier

## Immediate and Long-term Results

**Right After Treatment:**
- Instantly hydrated, glowing skin
- Smoother texture
- Reduced appearance of pores
- No redness or downtime

**With Regular Treatments:**
- Improved skin tone and texture
- Reduced fine lines and wrinkles
- Fewer breakouts and blackheads
- Enhanced product absorption

## Treatment Frequency

- Monthly treatments recommended
- Special events: 1-2 days before
- Series of 3-6 for optimal results
- Maintenance every 4-6 weeks

## Add-On Boosters

Customize your Hydrafacial with targeted boosters:
- **Brightening Booster:** For hyperpigmentation
- **Anti-Aging Booster:** For fine lines and wrinkles
- **Clarifying Booster:** For acne-prone skin
- **Hydrating Booster:** For dry, dehydrated skin

## Why Choose Hydrafacial?

- Suitable for all skin types
- No downtime required
- Immediate, visible results
- Relaxing, spa-like experience
- Customizable to your needs
- Safe and effective

The Hydrafacial is perfect for maintaining healthy, radiant skin or preparing for special events. Experience the difference at Sky Skin Clinic.`,
    author: "Dr. Kevin Thompson",
    date: "2025-01-20",
    readTime: "4 min read",
    category: "Facial Treatments",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: false
  },
  {
    id: 10,
    title: "The Complete Guide to Anti-Aging: Prevention vs. Treatment",
    excerpt: "Learn the difference between preventing aging and treating existing signs. Discover the best strategies for maintaining youthful skin at every age and stage of life.",
    content: `Aging is inevitable, but how we age is largely within our control. Understanding the difference between prevention and treatment is key to maintaining healthy, youthful skin throughout your life.

## Understanding the Aging Process

**Intrinsic Aging (Natural):**
- Genetic factors
- Hormonal changes
- Cellular metabolism slowdown
- Collagen and elastin breakdown

**Extrinsic Aging (Environmental):**
- Sun exposure (photoaging)
- Pollution and toxins
- Lifestyle factors
- Repetitive facial expressions

## Prevention: Your First Line of Defense

**In Your 20s:**
- Establish consistent skincare routine
- Daily SPF protection (non-negotiable)
- Antioxidant serums (Vitamin C)
- Gentle exfoliation
- Healthy lifestyle habits

**In Your 30s:**
- Add retinoids to routine
- Eye cream for delicate area
- Professional treatments (facials, peels)
- Stress management
- Adequate sleep and hydration

## Treatment: Addressing Existing Concerns

**Non-Invasive Options:**
- Botox for dynamic wrinkles
- Dermal fillers for volume loss
- Chemical peels for texture
- Microneedling for collagen stimulation
- Laser treatments for pigmentation

**Advanced Treatments:**
- HIFU for skin tightening
- PRP for natural rejuvenation
- Combination therapies
- Professional-grade skincare

## Age-Specific Strategies

**40s and Beyond:**
- Hormone replacement consideration
- More intensive treatments
- Regular professional maintenance
- Advanced skincare ingredients
- Lifestyle optimization

## The Power of Combination

**Layered Approach:**
- Daily prevention + periodic treatments
- Professional + at-home care
- Multiple modalities for comprehensive results
- Customized treatment plans

## Lifestyle Factors

**Essential Elements:**
- Sun protection (SPF 30+ daily)
- Balanced nutrition
- Regular exercise
- Adequate sleep (7-9 hours)
- Stress management
- Hydration
- No smoking

## Professional vs. At-Home Care

**Professional Treatments:**
- Higher concentrations of active ingredients
- Advanced technology and techniques
- Customized to your specific needs
- Professional expertise and safety

**At-Home Maintenance:**
- Daily consistency
- Quality products
- Proper application techniques
- Long-term commitment

## Creating Your Anti-Aging Plan

1. **Assessment:** Professional skin analysis
2. **Goals:** Define your objectives
3. **Timeline:** Realistic expectations
4. **Budget:** Investment in your skin
5. **Commitment:** Consistency is key

## Common Mistakes to Avoid

- Starting too late (it's never too early)
- Inconsistent routine
- Skipping sunscreen
- Over-treating or under-treating
- Ignoring lifestyle factors
- Unrealistic expectations

## The Sky Skin Clinic Approach

Our comprehensive anti-aging programs combine:
- Thorough skin assessment
- Customized treatment plans
- Professional treatments
- Home care guidance
- Ongoing support and adjustments

Remember, the best anti-aging strategy is one that's started early and maintained consistently. It's never too late to begin taking better care of your skin.`,
    author: "Dr. Maria Gonzalez",
    date: "2025-01-22",
    readTime: "8 min read",
    category: "Anti-Aging",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true
  }
];

const categories = ["All", "PRP Treatments", "HIFU Treatments", "Skin Boosters", "Skincare Tips", "Advanced Treatments", "Laser Treatments", "IV Therapy", "Facial Treatments", "Anti-Aging"];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  // Scroll to top when a blog post is selected
  React.useEffect(() => {
    if (selectedPost) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [selectedPost]);

  if (selectedPost) {

    return (
      <div className="mobile-min-vh-100 prevent-scroll">
        <Navigation />

        {/* Article Header */}
        <section className="pt-24 xs:pt-28 sm:pt-32 pb-8 xs:pb-10 sm:pb-12 relative overflow-hidden safe-area-top">
          <div className="absolute inset-0 bg-gradient-hero opacity-60" />
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 relative z-10 safe-area-left safe-area-right">
            <div className="max-w-4xl mx-auto">
              <Button
                onClick={() => {
                  setSelectedPost(null);
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                  });
                }}
                variant="outline"
                className="mb-6 xs:mb-8 sm:mb-6 hover:bg-primary/5"
              >
                ← Back to Blog
              </Button>

              <div className="inline-block mb-4 xs:mb-5 sm:mb-6">
                <span className="px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs xs:text-sm font-medium border border-primary/20">
                  {selectedPost.category}
                </span>
              </div>

              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 xs:mb-5 sm:mb-6 leading-tight">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 xs:gap-5 sm:gap-6 text-sm xs:text-base text-muted-foreground mb-6 xs:mb-8 sm:mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8 xs:py-10 sm:py-12">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl xs:text-3xl sm:text-3xl font-bold mt-8 xs:mt-10 sm:mt-12 mb-4 xs:mb-5 sm:mb-6 text-foreground">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                    return (
                      <h3 key={index} className="text-lg xs:text-xl sm:text-xl font-semibold mt-6 xs:mt-7 sm:mt-8 mb-3 xs:mb-4 sm:mb-4 text-primary">
                        {paragraph.replace(/\*\*/g, '').replace(':', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const listItems = paragraph.split('\n').filter(item => item.startsWith('- '));
                    
                    // Helper function to render bold text
                    const renderTextWithBold = (text: string) => {
                      const parts = text.split(/(\*\*.*?\*\*)/g);
                      return parts.map((part, partIndex) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={partIndex} className="font-semibold text-foreground">
                              {part.replace(/\*\*/g, '')}
                            </strong>
                          );
                        }
                        return part;
                      });
                    };

                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 xs:space-y-2 sm:space-y-3 mb-4 xs:mb-5 sm:mb-6 text-foreground/90">
                        {listItems.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-base xs:text-lg sm:text-lg leading-relaxed">
                            {renderTextWithBold(item.replace('- ', ''))}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  // Handle bold text within paragraphs
                  const renderTextWithBold = (text: string) => {
                    const parts = text.split(/(\*\*.*?\*\*)/g);
                    return parts.map((part, partIndex) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return (
                          <strong key={partIndex} className="font-semibold text-foreground">
                            {part.replace(/\*\*/g, '')}
                          </strong>
                        );
                      }
                      return part;
                    });
                  };

                  return (
                    <p key={index} className="text-base xs:text-lg sm:text-lg leading-relaxed mb-4 xs:mb-5 sm:mb-6 text-foreground/90">
                      {renderTextWithBold(paragraph)}
                    </p>
                  );
                })}
              </div>

              {/* CTA Section */}
              <div className="mt-12 xs:mt-16 sm:mt-20 p-6 xs:p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 text-center">
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 xs:mb-4 sm:mb-4">
                  Ready to Experience These Treatments?
                </h3>
                <p className="text-base xs:text-lg sm:text-lg text-muted-foreground mb-6 xs:mb-8 sm:mb-8">
                  Book a consultation with our expert practitioners and discover your personalized treatment plan.
                </p>
                <Link to="/book">
                  <Button size="lg" className="gradient-primary text-white shadow-premium hover:shadow-hover transition-smooth hover:scale-105">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="mobile-min-vh-100 prevent-scroll">
      <Navigation />

      {/* Hero Header */}
      <section className="pt-24 xs:pt-28 sm:pt-32 pb-10 xs:pb-12 sm:pb-16 relative overflow-hidden safe-area-top">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />

        <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 text-center relative z-10 safe-area-left safe-area-right">
          <div className="inline-block mb-4 xs:mb-5 sm:mb-6 opacity-0 animate-fade-down" style={{ animationDelay: '0ms' }}>
            <span className="px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs xs:text-sm font-medium border border-primary/20">
              Expert Insights
            </span>
          </div>

          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mb-5 xs:mb-6 sm:mb-8 opacity-0 animate-fade-up text-balance leading-[1.05] xs:leading-[1.1]" style={{ animationDelay: '100ms' }}>
            Skincare & Beauty
            <br />
            <span className="text-primary">Insights</span>
          </h1>

          <p className="text-base xs:text-lg sm:text-xl text-foreground/70 max-w-3xl mx-auto opacity-0 animate-fade-up px-3 xs:px-4 leading-relaxed" style={{ animationDelay: '200ms' }}>
            Discover the latest in aesthetic medicine, skincare science, and beauty treatments from our expert practitioners
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 xs:py-8 sm:py-10 bg-muted/30">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 opacity-0 animate-fade-up" style={{ animationDelay: '300ms' }}>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`text-xs xs:text-sm sm:text-sm px-3 xs:px-4 sm:px-6 py-2 xs:py-2 sm:py-3 transition-smooth hover:scale-105 ${selectedCategory === category
                    ? 'gradient-primary text-white shadow-premium'
                    : 'hover:bg-primary/5 hover:border-primary/30'
                  }`}
              >
                <Tag className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && featuredPosts.length > 0 && (
        <section className="py-12 xs:py-16 sm:py-20">
          <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-10 xs:mb-12 sm:mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '400ms' }}>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6">
                Featured Articles
              </h2>
              <p className="text-base xs:text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Our most popular and comprehensive guides to aesthetic treatments
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 max-w-6xl mx-auto">
              {featuredPosts.map((post, index) => (
                <Card
                  key={post.id}
                  className="group cursor-pointer shadow-premium hover:shadow-hover transition-all duration-500 hover:scale-105 border-border/50 bg-gradient-to-br from-background to-accent/5 opacity-0 animate-fade-up"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                  onClick={() => setSelectedPost(post)}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 xs:h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-2 py-1 xs:px-3 xs:py-1 rounded-full bg-primary text-white text-xs font-medium">
                          Featured
                        </span>
                      </div>
                    </div>

                    <div className="p-4 xs:p-5 sm:p-8">
                      <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4 sm:mb-4">
                        <span className="px-2 py-1 xs:px-2.5 xs:py-1 sm:px-3 sm:py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                          {post.category}
                        </span>
                      </div>

                      <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 xs:mb-3 sm:mb-4 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>

                      <p className="text-sm xs:text-base sm:text-base text-muted-foreground mb-4 xs:mb-5 sm:mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 xs:gap-4 text-xs xs:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3 xs:w-4 xs:h-4" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 xs:w-4 xs:h-4" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <ArrowRight className="w-4 h-4 xs:w-5 xs:h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 xs:py-16 sm:py-20 bg-muted/30">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 xs:mb-12 sm:mb-16 opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4 sm:mb-6">
              {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-base xs:text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed with the latest insights in aesthetic medicine and skincare
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-8 max-w-7xl mx-auto">
            {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post, index) => (
              <Card
                key={post.id}
                className="group cursor-pointer shadow-premium hover:shadow-hover transition-all duration-500 hover:scale-105 border-border/50 bg-gradient-to-br from-background to-accent/5 opacity-0 animate-fade-up"
                style={{ animationDelay: `${700 + index * 100}ms` }}
                onClick={() => setSelectedPost(post)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 xs:h-44 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 xs:p-5 sm:p-6">
                    <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
                      <span className="px-2 py-1 xs:px-2.5 xs:py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-3 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-xs xs:text-sm sm:text-base text-muted-foreground mb-4 xs:mb-5 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 xs:gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 xs:py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />

        <div className="container mx-auto px-4 xs:px-5 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: '800ms' }}>
            <div className="inline-block mb-4 xs:mb-5 sm:mb-6">
              <span className="px-3 py-1.5 xs:px-3.5 xs:py-2 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs xs:text-sm font-medium border border-primary/20">
                Ready to Begin?
              </span>
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 xs:mb-5 sm:mb-8 text-balance">
              Transform Your Skin with Expert Care
            </h2>

            <p className="text-base xs:text-lg sm:text-xl text-foreground/70 mb-6 xs:mb-8 sm:mb-10 max-w-2xl mx-auto px-3 xs:px-4">
              Ready to experience the treatments you've been reading about? Book your consultation today.
            </p>

            <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 sm:gap-4 justify-center max-w-lg xs:max-w-none mx-auto">
              <Link to="/book" className="w-full xs:w-auto">
                <Button size="lg" className="w-full xs:w-auto text-sm xs:text-base sm:text-base px-6 xs:px-8 sm:px-12 py-4 xs:py-5 sm:py-7 shadow-premium hover:shadow-hover transition-smooth hover:scale-105 gradient-primary text-white">
                  Schedule Consultation
                </Button>
              </Link>
              <Link to="/services" className="w-full xs:w-auto">
                <Button variant="outline" size="lg" className="w-full xs:w-auto text-sm xs:text-base sm:text-base px-6 xs:px-8 sm:px-12 py-4 xs:py-5 sm:py-7 transition-smooth hover:scale-105 border-2 hover:border-primary hover:bg-primary/5">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;