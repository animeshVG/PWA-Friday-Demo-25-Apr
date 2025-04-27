import React from 'react'
import QR from "./assets/Existing User Email One_.png"
import Logo from "./assets/image 18.png"

const App = () => {
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#ffffff",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 0",
        }}
      >
        <img
            src={Logo}
            
            style={{
              width: "25%",
              height: "100%",
              margin: "0 5px",
            }}
          />
        
        <div
          style={{
            textAlign: "right",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              margin: "0",
            }}
          >
            24/7 Customer Support
          </p>
          <a
            href="tel:8443281024"
            style={{
              fontSize: "16px",
              textDecoration: "none",
              color:"black"
            }}
          >
            (844) 328-1024
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "#FFF5F5",
          padding: "24px",
          borderRadius: "6px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            flex: "2",
            minWidth: "250px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "10px",
              marginTop: "0",
            }}
          >
            Congratulations!
          </h2>
          <p
            style={{
              marginBottom: "15px",
              fontSize: "16px",
            }}
          >
            You are pre-approved for <span style={{ fontWeight: "bold" }}>$200</span>.
          </p>
          <p
            style={{
              fontSize: "14px",
              marginBottom: "15px",
            }}
          >
            To avail this Download the App Now or
            <br />
            Scan the QR code to get started instantly
          </p>
          <a
            href="https://tubular-meerkat-36268e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#F05E41",
              color: "white",
              border: "none",
              borderRadius: "4px",
              padding: "10px 20px",
              fontWeight: "500",
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            DOWNLOAD APP NOW
          </a>
        </div>
        <div
          style={{
            flex: "1",
            minWidth: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "10px",
            }}
          >
            <img
              src={QR}
              alt="QR Code"
              style={{
                width: "150px",
                height: "150px",

              }}
            />
          </div>
          <p
            style={{
              fontSize: "14px",
              textAlign: "center",
              margin: "0",
            }}
          >
            To Download the App
            <br />
            Scan this QR Code
          </p>
        </div>
      </div>

      {/* Customer Message */}
      <div
        style={{
          padding: "24px 0",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            marginBottom: "10px",
          }}
        >
          Hi Jhon Doe,
        </p>
        <p
          style={{
            marginBottom: "10px",
          }}
        >
          We've got something special just for you!
        </p>
        <p
          style={{
            marginBottom: "15px",
          }}
        >
          You've been pre-approved for a $200 loan – and all you need to do is download our new app to claim it.
        </p>
        <p
          style={{
            marginBottom: "10px",
          }}
        >
          Our brand-new Progressive Web App (PWA) makes managing your loan easier than ever. With just a few taps, you
          can:
        </p>
        <ul
          style={{
            paddingLeft: "30px",
            marginBottom: "15px",
          }}
        >
          <li style={{ marginBottom: "5px" }}>View and manage your loan payments</li>
          <li style={{ marginBottom: "5px" }}>Check your payment history anytime</li>
          <li style={{ marginBottom: "5px" }}>Adjust your payment terms as per your needs</li>
          <li style={{ marginBottom: "5px" }}>Enjoy a secure and user-friendly experience</li>
        </ul>
        <p>No paperwork, no calls – just quick, seamless control at your fingertips.</p>
      </div>

      {/* Trust Section */}
      <div
        style={{
          backgroundColor: "#EFF6FF",
          padding: "24px",
          borderRadius: "6px",
          marginBottom: "24px",
        }}
      >
        <h3
          style={{
            textAlign: "left",
            fontWeight: "bold",
            marginBottom: "15px",
            marginTop: "0",
          }}
        >
          Three Sticks Lending Is Your Reliable & Trusted Lender
        </h3>
        <p
          style={{
            fontSize: "14px",
            margin: "0",
          }}
        >
          At Three Sticks Lending, you can trust us to be open and transparent with you throughout the entire process to
          ensure you have the best loan experience possible. Plus, you can always pay off your loan at any time without
          penalty.
        </p>
      </div>

      {/* Disclaimer */}
      <div
        style={{
          marginBottom: "24px",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            marginBottom: "5px",
          }}
        >
          Disclaimer:
        </p>
        <p
          style={{
            fontSize: "14px",
          }}
        >
          Offer valid for a limited time. Eligibility criteria apply. The $200 loan will be disbursed upon successful
          download and registration on the app. Terms and conditions apply.
        </p>
      </div>

      {/* Bottom Button */}
      <a
        href="https://tubular-meerkat-36268e.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#F05E41",
          color: "white",
          border: "none",
          borderRadius: "4px",
          padding: "10px 20px",
          fontWeight: "500",
          cursor: "pointer",
          textDecoration: "none",
          display: "inline-block",
          width: "180px",
          marginBottom: "30px",
        }}
      >
        DOWNLOAD APP NOW
      </a>
    </div>
  )
}

export default App
