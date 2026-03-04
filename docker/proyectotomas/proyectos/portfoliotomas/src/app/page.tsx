"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Server, Network, User, Mail, ChevronRight, Database, ExternalLink } from "lucide-react";
import styles from "./page.module.css";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          Tomás<span className="text-gradient">.ASIR</span>
        </div>
        <nav className={styles.nav}>
          <a href="#about" className={styles.navLink}>Sobre mí</a>
          <a href="#skills" className={styles.navLink}>Habilidades</a>
          <a href="#projects" className={styles.navLink}>Proyectos</a>
          <a href="#contact" className={styles.navLink}>Contacto</a>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <span className={styles.badge}>
            <Terminal size={14} /> Técnico Superior ASIR
          </span>
          <h1 className={styles.title}>
            Gestión y Administración de<br />
            <span className="text-gradient">Sistemas Informáticos</span>
          </h1>
          <p className={styles.subtitle}>
            Soy Tomás, experto en infraestructura IT, redes y ciberseguridad.
            Me dedico a crear, mantener y proteger entornos tecnológicos robustos para empresas del futuro.
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.primaryBtn}>
              Contactar <ChevronRight size={18} />
            </button>
            <a href="#projects" className={styles.secondaryBtn}>
              Ver Proyectos
            </a>
          </div>
        </section>

        <section id="skills" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Mi Experiencia <span className="text-gradient">Técnica</span>
          </h2>

          <motion.div
            className={styles.skillsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                icon: <Server size={24} />,
                title: "Administración de Servidores",
                desc: "Despliegue y gestión de infraestructura Windows Server y Linux. Active Directory, GPO, DNS, DHCP y virtualización con VMware/Proxmox."
              },
              {
                icon: <Network size={24} />,
                title: "Redes y Enrutamiento",
                desc: "Diseño y configuración de topologías de red. Routing, Switching, VLANs y monitorización de rendimiento de infraestructura."
              },
              {
                icon: <Shield size={24} />,
                title: "Ciberseguridad",
                desc: "Implementación de firewalls, políticas de seguridad, backups automatizados y auditorías para proteger datos críticos."
              },
              {
                icon: <Terminal size={24} />,
                title: "Automatización & Scripting",
                desc: "Creación de scripts en PowerShell y Bash para la automatización de tareas y resolución ágil de incidencias técnicas."
              }
            ].map((skill, i) => (
              <motion.div key={i} className={`glass-panel ${styles.skillCard}`} variants={itemVariants}>
                <div className={styles.skillIcon}>{skill.icon}</div>
                <h3 className={styles.skillTitle}>{skill.title}</h3>
                <p className={styles.skillDesc}>{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="projects" className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Mis <span className="text-gradient">Proyectos</span>
          </h2>

          <motion.div
            className={styles.skillsGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.a
              href="http://167.86.71.232:4000"
              target="_blank"
              rel="noopener noreferrer"
              className={`glass-panel ${styles.skillCard}`}
              variants={itemVariants}
              style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none' }}
              whileHover={{ y: -5, borderColor: 'rgba(79, 172, 254, 0.4)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className={styles.skillIcon}>
                  <Database size={24} />
                </div>
                <ExternalLink size={20} color="#a0a0a0" />
              </div>
              <h3 className={styles.skillTitle} style={{ marginTop: '1rem' }}>Base de Datos PokeAPI</h3>
              <p className={styles.skillDesc} style={{ flexGrow: 1 }}>
                Implementación de una base de datos interactiva basada en PokeAPI. Servidor desplegado y configurado en infraestructura propia.
              </p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span className={styles.badge} style={{ margin: 0, padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>Base de Datos</span>
                <span className={styles.badge} style={{ margin: 0, padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>API</span>
                <span className={styles.badge} style={{ margin: 0, padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>Server</span>
              </div>
            </motion.a>
          </motion.div>
        </section>

        <section id="about" className={styles.section}>
          <motion.div
            className={`glass-panel`}
            style={{ padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center' }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ padding: '20px', background: 'rgba(79, 172, 254, 0.1)', borderRadius: '50%', color: 'var(--accent)' }}>
              <User size={64} />
            </div>
            <div>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '1.5rem' }}>Sobre mí</h2>
              <p className={styles.subtitle} style={{ margin: '0 auto' }}>
                Con formación avanzada en <strong>Administración de Sistemas Informáticos en Red (ASIR)</strong>,
                me apasiona resolver problemas complejos de infraestructura y asegurar que las operaciones tecnológicas
                funcionen sin interrupciones. Busco la excelencia y eficiencia mediante la innovación, manteniéndome
                siempre actualizado con las últimas tendencias de virtualización y cloud computing.
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Tomás | Técnico Informático ASIR</p>
      </footer>
    </div>
  );
}
