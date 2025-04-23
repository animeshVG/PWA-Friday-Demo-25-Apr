import React from "react";

function App() {
  
  const styles = {
    container: {
      maxWidth: "1280px",
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
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
      {/* Header */}
      <header style={{ borderBottom: "1px solid #e5e7eb", backgroundColor: "white" }}>
        <div style={{ ...styles.container, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem" }}>
          {/* Logo */}
          <a href="/" style={{ display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="Three Sticks Lending" style={{ height: "auto", width: "180px" }} />
          </a>
          
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
        <section style={{ 
          position: "relative", 
          backgroundImage: "url('/hero-image.jpg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          padding: "4rem 0" 
        }}>
          <div style={styles.container}>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "2rem",
              alignItems: "center",
              "@media (max-width: 768px)": {
                gridTemplateColumns: "1fr"
              }
            }}>
              {/* Pre-approval message */}
              <div style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.9)", 
                padding: "2rem", 
                borderRadius: "0.5rem" 
              }}>
                <h1 style={styles.heading}>
                  You're Pre-Approved for <span style={{ color: "black" }}>$200!</span>
                </h1>
                <p style={{ fontSize: "1.25rem", marginBottom: "1.5rem" }}>
                  Just Download Our New App
                </p>
                <button style={{ 
                  backgroundColor: "#ef4444", 
                  color: "white", 
                  borderRadius: "0.25rem", 
                  padding: "0.75rem 1.5rem", 
                  fontSize: "0.875rem", 
                  fontWeight: "500", 
                  border: "none", 
                  cursor: "pointer" 
                }}>
                  DOWNLOAD APP NOW
                </button>
              </div>
              
              {/* QR Code */}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ 
                  backgroundColor: "white", 
                  padding: "1rem", 
                  borderRadius: "0.5rem", 
                  textAlign: "center" 
                }}>
                  <img 
                    src="/qr-code.png" 
                    alt="QR Code" 
                    style={{ width: "150px", height: "150px", margin: "0 auto" }} 
                  />
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
        <section style={{ padding: "3rem 0", backgroundColor: "#f9fafb" }}>
          <div style={styles.container}>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "2rem",
              "@media (max-width: 768px)": {
                gridTemplateColumns: "1fr"
              }
            }}>
              {/* Loan Process Steps */}
              <div>
                <h2 style={styles.subheading}>Get up to $3000 as soon as today*</h2>
                <p style={styles.paragraph}>
                  Our loan process is fast and effortless, and you can be approved in minutes. Just follow the steps below:
                </p>

                {/* Step 1 */}
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ 
                    flexShrink: "0", 
                    width: "2rem", 
                    height: "2rem", 
                    borderRadius: "9999px", 
                    backgroundColor: "#0a2240", 
                    color: "white", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: "700" 
                  }}>
                    1
                  </div>
                  <p>Fill out our secure online loan application.</p>
                </div>

                {/* Step 2 */}
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ 
                    flexShrink: "0", 
                    width: "2rem", 
                    height: "2rem", 
                    borderRadius: "9999px", 
                    backgroundColor: "#0a2240", 
                    color: "white", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: "700" 
                  }}>
                    2
                  </div>
                  <p>Receive your approval status and review your documents.</p>
                </div>

                {/* Step 3 */}
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ 
                    flexShrink: "0", 
                    width: "2rem", 
                    height: "2rem", 
                    borderRadius: "9999px", 
                    backgroundColor: "#0a2240", 
                    color: "white", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    fontWeight: "700" 
                  }}>
                    3
                  </div>
                  <p>Finalize your loan by 2:00p.m. CT and get your funds that same day.*</p>
                </div>

                <button style={styles.primaryButton}>GET STARTED NOW</button>
              </div>

              {/* Benefits Box */}
              <div style={{ 
                backgroundColor: "#0a2240", 
                color: "white", 
                padding: "2rem", 
                borderRadius: "0.5rem" 
              }}>
                <h3 style={{ 
                  textAlign: "center", 
                  color: "#f7941d", 
                  fontWeight: "700", 
                  marginBottom: "2rem" 
                }}>
                  THREE STICKS LENDING OFFERS<br />
                  INSTALLMENT LOANS WITH PERKS:
                </h3>

                {/* Benefit 1 */}
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "1rem", 
                  borderBottom: "1px solid #0c2a4e", 
                  paddingBottom: "1rem",
                  marginBottom: "1rem"
                }}>
                  <CheckCircleIcon color="#f7941d" />
                  <p>An effortless, secure online process</p>
                </div>

                {/* Benefit 2 */}
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "1rem", 
                  borderBottom: "1px solid #0c2a4e", 
                  paddingBottom: "1rem",
                  marginBottom: "1rem"
                }}>
                  <CheckCircleIcon color="#f7941d" />
                  <p>No hidden fees</p>
                </div>

                {/* Benefit 3 */}
                <div style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "1rem", 
                  borderBottom: "1px solid #0c2a4e", 
                  paddingBottom: "1rem",
                  marginBottom: "1rem"
                }}>
                  <CheckCircleIcon color="#f7941d" />
                  <p>No prepayment penalty</p>
                </div>

                {/* Benefit 4 */}
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <CheckCircleIcon color="#f7941d" />
                  <p>Three Sticks VIP Rewards</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Purpose Section */}
        <section style={{ padding: "3rem 0" }}>
          <div style={{ ...styles.container, textAlign: "center" }}>
            <h2 style={styles.subheading}>Three Sticks Lending is here to help you take care of life</h2>
            <p style={{ 
              maxWidth: "42rem", 
              margin: "0 auto", 
              marginBottom: "3rem" 
            }}>
              When you have an unexpected expense to cover, we can help get you the funds you need to use however you want...
            </p>

            {/* Loan Use Cases Grid */}
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", 
              gap: "1.5rem",
              marginBottom: "3rem"
            }}>
              {/* Car Repair */}
              <LoanUseCase image="/car-repair.jpg" title="Car Repair" />
              
              {/* Home Repair */}
              <LoanUseCase image="/home-repair.jpg" title="Home Repair" />
              
              {/* Medical Bills */}
              <LoanUseCase image="/medical-bills.jpg" title="Medical Bills" />
              
              {/* Extra Utility Bills */}
              <LoanUseCase image="/utility-bills.jpg" title="Extra Utility Bills" />
              
              {/* Moving Costs */}
              <LoanUseCase image="/moving-costs.jpg" title="Moving Costs" />
              
              {/* Family Emergencies */}
              <LoanUseCase image="/family-emergencies.jpg" title="Family Emergencies" />
            </div>

            <p style={{ marginBottom: "1.5rem" }}>
              We make it easy to get the funds you need without the worry and wait
            </p>
            <button style={styles.primaryButton}>APPLY NOW</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: "#0a2240", color: "white", padding: "3rem 0" }}>
        <div style={styles.container}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
            gap: "2rem" 
          }}>
            {/* Logo */}
            <div>
              <img 
                src="/logo-white.png" 
                alt="Three Sticks Lending" 
                style={{ width: "180px", height: "auto", marginBottom: "1rem" }} 
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
function CheckCircleIcon({ color = "currentColor" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

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

function LoanUseCase({ image, title }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ 
        marginBottom: "0.5rem", 
        height: "10rem", 
        width: "100%", 
        position: "relative" 
      }}>
        <img 
          src={image || "/placeholder.svg"} 
          alt={title} 
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            borderRadius: "0.5rem" 
          }} 
        />
      </div>
      <p style={{ fontWeight: "500" }}>{title}</p>
      <div style={{ 
        width: "2rem", 
        height: "0.25rem", 
        backgroundColor: "#0a2240", 
        marginTop: "0.25rem" 
      }}></div>
    </div>
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