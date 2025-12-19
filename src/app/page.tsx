"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import FeatureCardNineteen from '@/components/sections/feature/FeatureCardNineteen';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TeamCardFive from '@/components/sections/team/TeamCardFive';
import TestimonialCardEight from '@/components/sections/testimonial/TestimonialCardEight';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactInline from '@/components/sections/contact/ContactInline';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

export default function VitalikPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="circleGradient"
      cardStyle="glass-outline"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="vitalik"
          navItems={[
            { name: "Poems", id: "poems" },
            { name: "Stats", id: "stats" },
            { name: "Profile", id: "profile" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{
            text: "Watch Clips",
            href: "#testimonials"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="vitalik's disaster"
          description="just whistle — and disaster appears. the legendary counter-strike player who proves that you don't need enemies when you have teammates."
          imageSrc=""
          imageAlt="Counter-Strike competitive gameplay arena"
          frameStyle="card"
        />
      </div>

      <div id="poems" data-section="poems">
        <FeatureCardNineteen
          title="when any flashbang becomes a gangbang"
          description="A poetic tribute to CS2's most memorable moments of chaos"
          tag="Roasts"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: 1,
              tag: "First Strike",
              title: "When Disaster Whistles",
              subtitle: "The opening salvo",
              description: "just whistle — and disaster appears, it's vitalik here, farming teammates' tears. flash to the face, your screen goes white, nade at your feet — yeah, that was calculated, right",
              imageSrc: ""
            },
            {
              id: 2,
              tag: "The Griefing",
              title: "Wrong Ally Fire",
              subtitle: "Friendly fire always on",
              description: "when the round goes wrong and the team's on fire, who flashed his own squad and called it wire? no hero, no clutch, no enemy in sight — it's vitalik again, griefing left and right",
              imageSrc: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop"
            },
            {
              id: 3,
              tag: "Blind Luck",
              title: "The Fog of War",
              subtitle: "Vision denied",
              description: "if you're blind, low HP, and flying through air, and the killfeed says nothing but pain and despair. don't ask who did it, don't check the log — it's vitalik's flash, black-plague-style fog",
              imageSrc: "https://images.unsplash.com/photo-1542751110-97378042af21?w=800&h=600&fit=crop"
            },
            {
              id: 4,
              tag: "The Performance",
              title: "Pop Goes the Dreamer",
              subtitle: "Top frag dreams shattered",
              description: "hear that pop? that's not the enemy's plan, that's vitalik thinking he's top frag man. flash for the team — straight into their eyes, nade under boots — surprise, surprise",
              imageSrc: ""
            },
            {
              id: 5,
              tag: "The Chaos",
              title: "Teamwork Torn Apart",
              subtitle: "Only one thing needed",
              description: "only whistle — and chaos is born, vitalik joins, teamwork gets torn. no need for enemies, no need for a match, when vitalik's playing — your squad's outmatched",
              imageSrc: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop"
            }
          ]}
        />
      </div>

      <div id="vitalik-poems-one" data-section="vitalik-poems-one">
        <FeatureCardNineteen
          title="More Legendary Moments"
          description="Additional verses from Vitalik's legendary saga"
          tag="Extended"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          features={[
            {
              id: 6,
              tag: "The Flashbang Master",
              title: "Never Flashes Enemies",
              subtitle: "Tactical genius... in reverse",
              description: "he never flashes enemies, that part he always forgets, but blinds his own damn team with military-grade effects",
              imageSrc: "https://images.unsplash.com/photo-1542751110-97378042af21?w=800&h=600&fit=crop"
            },
            {
              id: 7,
              tag: "The Paradox",
              title: "Blind Victory",
              subtitle: "No enemies needed",
              description: "no enemies in sight, still everyone's blind, vitalik's flashbangs — always perfectly timed",
              imageSrc: "https://images.unsplash.com/photo-1538481143235-8d73e359adf5?w=800&h=600&fit=crop"
            },
            {
              id: 8,
              tag: "The Surgeon",
              title: "Surgical Precision",
              subtitle: "Precision in all the wrong places",
              description: "his flashes hit allies with surgical grace, enemies untouched, teammates lose face",
              imageSrc: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop"
            },
            {
              id: 9,
              tag: "The Teamplayer",
              title: "True Teamplay",
              subtitle: "Five friends go blind",
              description: "he calls it 'teamplay', throws white to the sky, five friends go blind — enemies just walk by",
              imageSrc: "https://images.unsplash.com/photo-1542751110-97378042af21?w=800&h=600&fit=crop"
            },
            {
              id: 10,
              tag: "The Irony",
              title: "Perfect Execution",
              subtitle: "One small detail",
              description: "perfect arc, clean throw, flawless release, just one small detail — wrong fucking team",
              imageSrc: "https://images.unsplash.com/photo-1538481143235-8d73e359adf5?w=800&h=600&fit=crop"
            }
          ]}
        />
      </div>

      <div id="stats" data-section="stats">
        <MetricCardEleven
          title="The Numbers Don't Lie"
          description="Vitalik's legendary in-game statistics speak volumes"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "0.2",
              title: "Average K/D Ratio",
              description: "Kills per death achieved",
              imageSrc: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop"
            },
            {
              id: "2",
              value: "45%",
              title: "Friendly Fire Rate",
              description: "Damage dealt to teammates",
              imageSrc: "https://images.unsplash.com/photo-1542751110-97378042af21?w=800&h=600&fit=crop"
            },
            {
              id: "3",
              value: "99%",
              title: "Flash Accuracy",
              description: "Flashed teammates successfully",
              imageSrc: "https://images.unsplash.com/photo-1538481143235-8d73e359adf5?w=800&h=600&fit=crop"
            },
            {
              id: "4",
              value: "1/50",
              title: "Clutch Win Probability",
              description: "Solo carry success rate",
              imageSrc: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=800&h=600&fit=crop"
            }
          ]}
        />
      </div>

      <div id="profile" data-section="profile">
        <TeamCardFive
          title="The Legend Himself"
          description="Meet Vitalik: Counter-Strike 2's most entertaining player"
          tag="The Player"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="slide-up"
          team={[
            {
              id: "1",
              name: "Vitalik",
              role: "Professional Disaster Manager",
              imageSrc: ""
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardEight
          title="What His Teammates Say"
          description="Direct feedback from those who've played alongside Vitalik"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Alex Kovalenko",
              role: "Team Captain",
              company: "Pro Squad",
              rating: 1,
              imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
            },
            {
              id: "2",
              name: "Marcus Chen",
              role: "IGL",
              company: "Rival Team",
              rating: 1,
              imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
            },
            {
              id: "3",
              name: "Olaf Soren",
              role: "Streamer",
              company: "Gaming Community",
              rating: 5,
              imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
            },
            {
              id: "4",
              name: "Jessica Park",
              role: "Coach",
              company: "Academy Team",
              rating: 1,
              imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
            },
            {
              id: "5",
              name: "Dmitri Volkov",
              role: "Teammate",
              company: "Former Squad",
              rating: 1,
              imageSrc: "https://images.unsplash.com/photo-1519345291446-c1a5ad1b3542?w=400&h=400&fit=crop"
            },
            {
              id: "6",
              name: "Sarah Mueller",
              role: "Caster",
              company: "Esports Network",
              rating: 5,
              imageSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions About Vitalik"
          sideDescription="Everything you need to know about CS2's most legendary player"
          textPosition="left"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Is Vitalik actually bad at Counter-Strike?",
              content: "Let's just say his K/D ratio speaks louder than any words. His ability to turn winning rounds into losses is truly a special skill that takes dedication to master."
            },
            {
              id: "2",
              title: "Why does Vitalik flash his own team so much?",
              content: "Vitalik believes in aggressive repositioning tactics. Unfortunately for his teammates, those grenades rarely distinguish between friend and foe. It's a feature, not a bug."
            },
            {
              id: "3",
              title: "Can I learn from watching Vitalik play?",
              content: "Absolutely! You'll learn exactly what NOT to do in almost every situation. His streams are basically a masterclass in chaos management and creative nade placement."
            },
            {
              id: "4",
              title: "Has Vitalik ever won a competitive match?",
              content: "Define 'won'. He's certainly responsible for numerous outcomes, though they're rarely the outcomes his team hoped for when the match began."
            },
            {
              id: "5",
              title: "Why do people keep inviting him to play?",
              content: "Entertainment value. When Vitalik is on your team, every round becomes an adventure. You never know what disaster will unfold next, but you can guarantee it'll be memorable."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactInline
          text="Ready to witness the chaos?"
          inputPlaceholder="Enter your Discord handle"
          buttonText="Join the Madness"
          useInvertedBackground="noInvert"
          animationType="entrance-slide"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Vitalik",
              items: [
                { label: "About", href: "#profile" },
                { label: "Poems", href: "#poems" }
              ]
            },
            {
              title: "Community",
              items: [
                { label: "Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "No Refunds Policy", href: "#" },
                { label: "Damage Waiver", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 | Vitalik's Legendary Moments | Griefing Since Day One"
        />
      </div>
    </ThemeProvider>
  );
}
