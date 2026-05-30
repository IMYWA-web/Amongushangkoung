import { Card } from "@/components/ui/card";
import { AlertCircle, Zap, Shield, Eye } from "lucide-react";
import { useState } from "react";

/**
 * Among Us Gift Website - Home Page
 * Design: Dark Sci-Fi Imposter Aesthetic
 * Theme: Cyberpunk meets playful game UI with neon glows and animations
 * Colors: Deep space black (#0a0e27), cyan (#06b6d4), purple (#7c3aed), red (#ef4444)
 */

export default function Home() {
  const [mode, setMode] = useState<"imposter" | "crewmate">("imposter");

  const isImposter = mode === "imposter";
  const modeColor = isImposter ? "text-red-500" : "text-cyan-400";
  const modeBgColor = isImposter ? "bg-red-500/20" : "bg-cyan-500/20";
  const modeGlowColor = isImposter ? "glow-red" : "glow-cyan";
  const modeBorderColor = isImposter ? "border-red-500/50" : "border-cyan-500/50";

  const modeTitle = isImposter ? "Hello HangKoung" : "Welcome Crewmate";
  const modeSubtitle = isImposter
    ? "▸ SYSTEM ALERT: SUSPICIOUS ACTIVITY DETECTED"
    : "▸ SYSTEM ALERT: CREW MEMBER VERIFIED";
  const modeDescription = isImposter
    ? "You've been chosen as an imposter in the game of life. This is your gift—a celebration of your sneaky, strategic, and hilarious nature. Welcome to the crew, sus friend."
    : "You're a loyal crewmate! This gift celebrates your trustworthiness, teamwork, and ability to spot the sus. Keep the ship safe, friend.";

  const missions = isImposter
    ? [
        {
          icon: Zap,
          title: "Sabotage",
          description:
            "Master the art of strategic deception. Sabotage tasks, create chaos, and keep everyone guessing.",
          difficulty: "EXTREME",
        },
        {
          icon: Eye,
          title: "Deceive",
          description:
            "Blend in with the crew. Perfect your poker face and convince everyone of your innocence.",
          difficulty: "LEGENDARY",
        },
        {
          icon: Shield,
          title: "Eliminate",
          description:
            "Strike when the moment is right. Eliminate threats and control the narrative of the game.",
          difficulty: "INSANE",
        },
      ]
    : [
        {
          icon: Eye,
          title: "Observe",
          description:
            "Watch for suspicious behavior. Pay attention to who's acting strange and report your findings.",
          difficulty: "MODERATE",
        },
        {
          icon: Zap,
          title: "Complete Tasks",
          description:
            "Work together with other crewmates to complete all tasks and keep the ship running smoothly.",
          difficulty: "NORMAL",
        },
        {
          icon: Shield,
          title: "Vote Wisely",
          description:
            "Use logic and evidence to identify the imposter. Vote them out and save the crew!",
          difficulty: "CHALLENGING",
        },
      ];

  const statusTitle = isImposter ? "✓ IMPOSTER CONFIRMED" : "✓ CREWMATE VERIFIED";
  const statusMessage = isImposter
    ? "You have been identified as the imposter. Your mission is clear: survive the vote, complete your objectives, and emerge victorious. The crew will never see it coming."
    : "You are a loyal crewmate. Your mission is to complete your tasks, identify the imposter, and vote them out. Trust your instincts!";
  const warningMessage = isImposter
    ? "▸ WARNING: IMPOSTER DETECTED IN SYSTEM\n▸ KEEP YOUR COVER. TRUST NO ONE.\n▸ VICTORY AWAITS THE CUNNING."
    : "▸ ALERT: CREWMATE ONLINE\n▸ STAY VIGILANT. REPORT SUSPICIOUS ACTIVITY.\n▸ TEAMWORK MAKES THE DREAM WORK.";

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background with space theme */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663685310561/9wn9nczULNDimxajWJGFvj/space-background-dark-GRun6n2DyymTg2Gk5ct8rw.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay for better text contrast */}
      <div className="fixed inset-0 -z-10 bg-black/40" />

      {/* Sticky Mode Switcher */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-cyan-500/20 py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-4">
          <span className="text-sm text-gray-400 cyber-text">▸ MODE:</span>
          <div className="flex gap-2 bg-card/50 rounded-lg p-1 border border-cyan-500/30">
            <button
              onClick={() => setMode("imposter")}
              className={`px-6 py-2 rounded font-bold uppercase tracking-wider transition-all duration-200 ${
                isImposter
                  ? "bg-red-500/30 text-red-400 border border-red-500/50 shadow-lg shadow-red-500/20"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Imposter
            </button>
            <button
              onClick={() => setMode("crewmate")}
              className={`px-6 py-2 rounded font-bold uppercase tracking-wider transition-all duration-200 ${
                !isImposter
                  ? "bg-cyan-500/30 text-cyan-400 border border-cyan-500/50 shadow-lg shadow-cyan-500/20"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              Crewmate
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-6xl mx-auto space-y-12">
          {/* Banner Image */}
          <div className="flex justify-center animate-fade-in">
            <img
              src="/image-removebg-preview.png"
              alt="Red Imposter"
              className={`w-full max-w-2xl object-contain rounded-lg neon-border ${modeGlowColor} animate-float`}
            />
          </div>

          {/* Hero Text */}
          <div className="text-center space-y-6 animate-slide-in-right">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                <span className="text-cyan-400">Hello</span>
                <br />
                <span className={modeColor}>{isImposter ? "HangKoung" : "HangKoung"}</span>
              </h1>
              <p className={`text-xl md:text-2xl ${isImposter ? "text-red-400" : "text-cyan-300"} cyber-text`}>
                {modeSubtitle}
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              {modeDescription}
            </p>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border-2 border-purple-500/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: "20s" }} />
        <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-cyan-500/30 rounded-full animate-pulse" />
      </section>

      {/* Divider */}
      <div className={`relative h-24 bg-gradient-to-b from-transparent ${isImposter ? "via-red-500/10" : "via-cyan-500/10"} to-transparent flex items-center justify-center`}>
        <div className={`${isImposter ? "text-red-400" : "text-cyan-400"} cyber-text text-sm tracking-widest`}>
          ▸ ▸ ▸ {isImposter ? "MISSION BRIEFING" : "CREW BRIEFING"} ▸ ▸ ▸
        </div>
      </div>

      {/* Mission Cards Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-16 text-center">
            <span className="text-cyan-400">Your</span> <span className={isImposter ? "text-red-400" : "text-purple-400"}>Role</span> <span className={isImposter ? "text-red-400" : "text-cyan-400"}>Objectives</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {missions.map((mission, idx) => {
              const Icon = mission.icon;
              const borderColor = isImposter ? "border-red-500/50" : "border-cyan-500/50";
              const bgHoverColor = isImposter ? "hover:bg-red-500/20" : "hover:bg-cyan-500/20";
              const textColor = isImposter ? "text-red-400" : "text-cyan-400";

              return (
                <Card
                  key={idx}
                  className={`bg-card/80 backdrop-blur ${borderColor} neon-border ${bgHoverColor} transition-all duration-300 overflow-hidden group`}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 ${isImposter ? "bg-red-500/20" : "bg-cyan-500/20"} rounded-lg group-hover:${isImposter ? "bg-red-500/30" : "bg-cyan-500/30"} transition-colors`}>
                        <Icon className={`w-6 h-6 ${textColor}`} />
                      </div>
                      <h3 className="text-xl font-bold uppercase">{mission.title}</h3>
                    </div>
                    <p className="text-gray-300">{mission.description}</p>
                    <div className={`text-sm ${textColor} cyber-text`}>
                      ▸ DIFFICULTY: {mission.difficulty}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className={`relative h-24 bg-gradient-to-b from-transparent ${isImposter ? "via-purple-500/10" : "via-purple-500/10"} to-transparent flex items-center justify-center`}>
        <div className={`${isImposter ? "text-purple-400" : "text-purple-400"} cyber-text text-sm tracking-widest`}>
          ▸ ▸ ▸ {isImposter ? "IMPOSTER STATUS" : "CREWMATE STATUS"} ▸ ▸ ▸
        </div>
      </div>

      {/* Status Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className={`bg-card/80 backdrop-blur border-2 ${modeBorderColor} p-8 space-y-6`}>
            <div className="flex items-start gap-4">
              <AlertCircle className={`w-8 h-8 ${isImposter ? "text-red-500" : "text-cyan-500"} flex-shrink-0 mt-1`} />
              <div className="space-y-3">
                <h3 className={`text-2xl font-bold uppercase ${modeColor}`}>
                  {statusTitle}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {statusMessage}
                </p>
              </div>
            </div>

            <div className={`mt-6 p-4 ${modeBgColor} border ${modeBorderColor} rounded-lg animate-glow-pulse`}>
              <p className={`${isImposter ? "text-red-300" : "text-cyan-300"} cyber-text text-sm whitespace-pre-line`}>
                {warningMessage}
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Crewmates Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 text-center">
            <span className="text-cyan-400">Meet the</span> <span className="text-purple-400">Crew</span>
          </h2>

          <div className="flex justify-center">
            <img
              src="/manus-storage/pasted_file_D3dWwa_image_b55b0427.webp"
              alt="Crewmates"
              className="w-full max-w-4xl object-contain rounded-lg neon-border"
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className={`relative py-20 px-4 bg-gradient-to-b from-transparent ${isImposter ? "via-red-500/5" : "via-cyan-500/5"} to-transparent`}>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase">
              <span className={isImposter ? "text-red-400" : "text-cyan-400"}>Welcome</span> to the <span className={isImposter ? "text-red-400" : "text-cyan-400"}>Game</span>
            </h2>
            <p className="text-xl text-gray-300">
              {isImposter
                ? "This gift is a celebration of your cunning, your humor, and your ability to keep us all guessing. Here's to the sus among us."
                : "This gift celebrates your loyalty, teamwork, and keen eye for spotting the imposters. Keep the crew safe and trust your instincts!"}
            </p>
          </div>

          <div className="text-sm text-gray-400 cyber-text mt-12 space-y-2">
            <p>▸ CREATED WITH LOVE FOR A LEGENDARY {isImposter ? "IMPOSTER" : "CREWMATE"}</p>
            <p>▸ {isImposter ? "MAY YOUR DECEPTIONS BE SWIFT AND YOUR ALIBIS BULLETPROOF" : "MAY YOUR TASKS BE SWIFT AND YOUR VOTES BE TRUE"}</p>
            <p>▸ AMONG US FOREVER</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-cyan-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-400 space-y-2">
          <p className="cyber-text">▸ IMPOSTER PROTOCOL v1.0 | GIFT EDITION ▸</p>
          <p className="text-xs text-gray-500">© 2026 GiftsyQR. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
