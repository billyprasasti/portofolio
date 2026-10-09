"use client";
import { useState } from "react";

const jobs = [
  { role: "Senior IT Infrastructure", org: "Cartrack Technologies Indonesia", when: "Jun 2025 to now", tags: ["infra"],
    points: ["Run end-user and remote support, and provision new-hire laptops end to end.", "Manage EDR and antivirus, review security alerts, patch operating systems and investigate incidents.", "Administer Fortinet and Sophos firewalls, wireless access points and network devices.", "Maintain on-premises servers, asset lifecycle, vendors and procurement, and report to stakeholders."] },
  { role: "Senior IT Specialist", org: "InCorp Indonesia", when: "Sep 2022 to Jun 2025", tags: ["infra", "dev"],
    points: ["Administered Google Workspace and Microsoft 365, including accounts and access permissions.", "Managed Proxmox virtualization, Cisco Meraki firewalls and MikroTik devices.", "Built and maintained internal web applications that improved business processes.", "Handled IT asset inventory, budgeting, vendor management and operational reporting."] },
  { role: "Full Stack Developer", org: "PT Prodia Widyahusada Tbk", when: "Mar 2022 to Aug 2022", tags: ["dev"],
    points: ["Developed REST APIs and internal web applications with PHP frameworks.", "Tested, fixed, deployed and integrated systems, and supported DevOps activities."] },
  { role: "Full Stack Developer", org: "DKI Jakarta Government", when: "Nov 2019 to Feb 2022", tags: ["dev"],
    points: ["Built and maintained government web applications and services.", "Maintained REST APIs, ran system testing and supported production deployments."] },
];

const tabs = [["all", "All"], ["infra", "Infrastructure & security"], ["dev", "Development"]];

export default function Experience() {
  const [f, setF] = useState("all");
  const list = jobs.filter((j) => f === "all" || j.tags.includes(f));
  return (
    <>
      <div className="tabs" role="tablist">
        {tabs.map(([k, l]) => (
          <button key={k} role="tab" aria-selected={f === k} className={f === k ? "on" : ""} onClick={() => setF(k)}>{l}</button>
        ))}
      </div>
      <ol className="timeline">
        {list.map((j) => (
          <li key={j.org + j.when}>
            <div className="meta"><em>{j.when}</em></div>
            <div>
              <h3>{j.role}</h3>
              <p className="org">{j.org}</p>
              <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
