import Image from "next/image";
import { CurrentTasks } from "@/components/layout/CurrentTasks";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { Divider } from "@/components/ui/Divider";
import { SkillRing } from "@/components/ui/SkillRing";

export function Sidebar() {
  return (
    <>
      <aside className="sidebar-aside" aria-hidden="true" />
      <div className="sidebar-sticky">
        <div className="sidebar-sticky__inner">
          <div className="sidebar-profile">
            <div className="sidebar-profile__top">
              <div className="sidebar-profile__avatar">
                <Image
                  src={profile.photoUrl}
                  alt={profile.name}
                  width={135}
                  height={135}
                  unoptimized
                  className="sidebar-profile__photo"
                />
              </div>

              <h2 className="sidebar-profile__name">{profile.name}</h2>
              <p className="sidebar-profile__role">{profile.role}</p>

              <Divider className="sidebar-profile__divider" />

              <div className="sidebar-profile__meta-group">
                <p className="sidebar-profile__meta">País: {profile.country}</p>
                <p className="sidebar-profile__meta">Ciudad: {profile.city}</p>
              </div>

              <Divider className="sidebar-profile__divider" />
            </div>

            <div className="sidebar-profile__skills-wrap">
              <div className="sidebar-profile__skills">
                {skills.map((skill) => (
                  <SkillRing key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </div>

          <CurrentTasks />
        </div>
      </div>
    </>
  );
}
