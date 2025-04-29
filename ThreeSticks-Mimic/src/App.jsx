import React from "react";
import Logo from "./assets/image 18.png";
import banner from "./assets/Frame 26.png";
import whiteLogo from "./assets/image 20.png";
import QR from "./assets/QR.png"

function App() {
  const styles = {
    container: {
      maxWidth: "100%",
      margin: "0 auto",
      padding: "0 1rem",
    },
    containersecondary: {
      maxWidth: "92%",
      margin: "0 auto",
      padding: "0 1rem",
    },
    heading: {
      fontSize: "1.875rem",
      fontWeight: "700",
      marginBottom: "1rem",
    },
    subheading: {
      fontSize: "1.5rem",
      fontWeight: "700",
      marginBottom: "1rem",
    },
    paragraph: {
      marginBottom: "1rem",
      lineHeight: "1.5",
    },
    primaryButton: {
      backgroundColor: "#e87722",
      color: "white",
      borderRadius: "0.25rem",
      padding: "0.75rem 1.5rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
    },
    secondaryButton: {
      border: "1px solid #d1d5db",
      borderRadius: "0.25rem",
      padding: "0.5rem 1rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      backgroundColor: "transparent",
      cursor: "pointer",
    },
    navLink: {
      fontSize: "0.875rem",
      fontWeight: "500",
      textDecoration: "none",
      color: "#000",
    },
    footerLink: {
      color: "white",
      textDecoration: "none",
    },
    footerHeading: {
      fontWeight: "700",
      marginBottom: "1rem",
    },
    loanProcessSection: {
      padding: "3rem 12px",
      backgroundColor: "#f8f8f8",
    },
    loanProcessContainer: {
      display: "flex",
      justifyContent: "space-between",
      gap: "200px",
      // maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 12px",
      width: "100%",
      // backgroundColor:"red"
      // paddingRight:"70px"
    },
    loanProcessText: {
      flex: 1,
      maxWidth: "50%",
      padding: "0 12px"
    },
    sectionTitle: {
      fontSize: "1.75rem",
      fontWeight: "600",
      marginBottom: "1.5rem",
      color: "#333",
    },
    sectionDescription: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#666",
      marginBottom: "2rem",
    },
    steps: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
      marginBottom: "2rem",
    },
    step: {
      display: "flex",
      alignItems: "flex-start",
      gap: "1rem",
    },
    stepNumber: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "2rem",
      height: "2rem",
      borderRadius: "50%",
      backgroundColor: "#023246",
      color: "white",
      fontWeight: "bold",
      fontSize: "1rem",
      flexShrink: 0,
    },
    stepText: {
      fontSize: "1rem",
      margin: 0,
      lineHeight: "1.5",
    },
    loanPerksContainer: {
      backgroundColor: "#023246",
      color: "white",
      // padding: "2rem",
      borderRadius: "0.5rem",
      flex: 1,
      maxWidth: "30%",
      marginLeft: "auto",
      // height:"350px"
      padding: "3rem 4rem"

    },
    perksTitle: {
      color: "#e87722",
      fontSize: "1.125rem",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: "1.5rem",
    },
    perkItem: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "1rem 0",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
    },
    perkIcon: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "1.5rem",
      height: "1.5rem",
      borderRadius: "50%",
      backgroundColor: "#e87722",
      color: "white",
      fontWeight: "bold",
      fontSize: "1rem",
    },
    perkText: {
      fontSize: "1rem",
      margin: 0,
    },
    getStartedButton: {
      backgroundColor: "#e87722",
      color: "white",
      borderRadius: "0.25rem",
      padding: "0.75rem 2rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      border: "none",
      cursor: "pointer",
    },
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "white" }}>
        <div style={{ ...styles.container, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={Logo} alt="Three Sticks Lending" style={{ height: "auto", width: "180px" }} />
          </div>

          {/* Navigation */}
          <nav style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="/contact" style={styles.navLink}>CONTACT US</a>
            <div style={{ position: "relative" }}>
              <button style={{ ...styles.navLink, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
                RESOURCES ▼
              </button>
            </div>
            <div style={{ position: "relative" }}>
              <button style={{ ...styles.navLink, background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center" }}>
                SERVICES ▼
              </button>
            </div>
            <button style={styles.primaryButton}>APPLY NOW</button>
            <button style={styles.secondaryButton}>LOG IN</button>
          </nav>
        </div>
      </header>

      <main style={{ flex: "1" }}>
        {/* Hero Section */}
        <section>
          <div style={styles.container}>
            <div>
              <img src={banner} alt="Banner" style={{ width: "100%" }} />
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              alignItems: "center",
              backgroundColor: "#F8F2EC",
            }}>
              {/* Pre-approval message */}
              <div style={{ padding: "7rem", borderRadius: "0.5rem" }}>
                <h1 style={styles.heading}>
                  You're Pre-Approved for <span style={{ color: "black" }}>$200!</span>
                </h1>
                <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
                  Just Download Our New App
                </p>
                {/* <a href="https://delightful-rolypoly-ae41e3.netlify.app/" style={{
                  ...styles.primaryButton,
                  backgroundColor: "#ef4444",
                  textDecoration:"none"
                }}>
                  DOWNLOAD APP NOW
                </a> */}
                <a
                  href="https://serene-mousse-3990fd.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...styles.primaryButton,
                    backgroundColor: "#ef4444",
                    textDecoration: "none"
                  }}
                >
                  DOWNLOAD APP NOW
                </a>
              </div>

              {/* QR Code */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{
                  backgroundColor: "white",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  textAlign: "center"
                }}>
                  <div style={{
                    width: "220px",
                    height: "220px",
                    margin: "0 auto",
                    // backgroundColor: "#f0f0f0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#666"
                  }}>
                    <img src={QR} alt="" style={{
                      width: "200px",
                      height: "200px",
                      margin: "0 auto",
                      // backgroundColor: "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#666"
                    }} />
                  </div>
                  <p style={{ fontSize: "0.875rem", marginTop: "0.5rem" }}>
                    To Download the App<br />
                    Scan this QR Code
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Process Section */}
        <section style={styles.loanProcessSection}>
          <div style={styles.loanProcessContainer}>
            <div style={styles.loanProcessText}>
              <h2 style={styles.sectionTitle}>Get up to $3000 as soon as today*</h2>
              <p style={styles.sectionDescription}>
                Our loan process is fast and effortless, and you can be approved in minutes. Just follow the steps below:
              </p>

              <div style={styles.steps}>
                <div style={styles.step}>
                  <div style={styles.stepNumber}>1</div>
                  <p style={styles.stepText}>Fill out our secure online loan application.</p>
                </div>

                <div style={styles.step}>
                  <div style={styles.stepNumber}>2</div>
                  <p style={styles.stepText}>Receive your approval status and review your documents.</p>
                </div>

                <div style={styles.step}>
                  <div style={styles.stepNumber}>3</div>
                  <p style={styles.stepText}>Finalize your loan by 2:00p.m. CT and get your funds that same day.*</p>
                </div>
              </div>

              <button style={styles.getStartedButton}>GET STARTED NOW</button>
            </div>

            <div style={styles.loanPerksContainer}>
              <div>
                <h3 style={styles.perksTitle}>THREE STICKS LENDING OFFERS INSTALLMENT LOANS WITH PERKS:</h3>

                <div style={styles.perkItem}>
                  <div style={styles.perkIcon}>✓</div>
                  <p style={styles.perkText}>An effortless, secure online process</p>
                </div>

                <div style={styles.perkItem}>
                  <div style={styles.perkIcon}>✓</div>
                  <p style={styles.perkText}>No hidden fees</p>
                </div>

                <div style={styles.perkItem}>
                  <div style={styles.perkIcon}>✓</div>
                  <p style={styles.perkText}>No prepayment penalty</p>
                </div>

                <div style={styles.perkItem}>
                  <div style={styles.perkIcon}>✓</div>
                  <p style={styles.perkText}>Three Sticks VIP Rewards</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#023246", color: "white", padding: "3rem 0" }}>
        <div style={styles.container}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem"
          }}>
            {/* Logo */}
            <div>
              <img
                src={whiteLogo}
                alt="Three Sticks Lending"
                style={{ width: "210px", height: "auto", marginBottom: "1rem" }}
              />
            </div>

            {/* Policies */}
            <div>
              <h4 style={styles.footerHeading}>Policies</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <FooterLink href="#" text="Availability & Rates" />
                <FooterLink href="#" text="Mobile Communications" />
                <FooterLink href="#" text="Terms & Conditions" />
                <FooterLink href="#" text="Privacy Policy" />
                <FooterLink href="#" text="Opt Out of Information Sharing" />
                <FooterLink href="#" text="Terms & Conditions" />
              </ul>
            </div>

            {/* Resources & Services */}
            <div>
              <h4 style={styles.footerHeading}>Resources</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <FooterLink href="#" text="Loan FAQ" />
              </ul>

              <h4 style={{ ...styles.footerHeading, marginTop: "1.5rem" }}>Services</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <FooterLink href="#" text="Who We Are" />
                <FooterLink href="#" text="Boost Up" />
              </ul>
            </div>

            {/* Customer Support */}
            <div>
              <h4 style={styles.footerHeading}>24/7 Customer Support</h4>
              <p style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "1rem",
                fontWeight: "500"
              }}>
                <PhoneIcon />
                (844) 328-1024
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper Components
function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function FooterLink({ href, text }) {
  return (
    <li style={{ marginBottom: "0.5rem" }}>
      <a
        href={href}
        style={{
          color: "white",
          textDecoration: "none"
        }}
      >
        {text}
      </a>
    </li>
  );
}

export default App;