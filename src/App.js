
import React from 'react';
import './App.css';
import Charts from './Charts';
function App() {

  

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h2> Anaswara</h2>
        <p className="brand">JEWELLERS</p>

        <ul>
          <li className="active">▦ Dashboard</li>
          <li> Customers</li>
          <li> New Joining</li>
          <li> Payments</li>
          <li> Schemes</li>
          <li>⚙ Settings</li>
        </ul>

        <div className="logout"> Logout</div>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Navbar */}
        <nav className="navbar">
          <h3>Dashboard</h3>
          <div className="profile">
          
            <span>Admin </span>
          </div>
        </nav>

        {/* Welcome */}
        <section className="welcome">
          <h2>Dashboard Overview</h2>
          <p>Welcome back! Here's your jewellery business overview.</p>
        </section>

        {/* Dashboard Cards */}
        <section className="cards">

          <div className="card">
            <p>Total Customers</p>
            <h2>1,250</h2>
            <small>Registered customers</small>
          </div>

          <div className="card">
            <p>Total Collections</p>
            <h2>₹15,40,000</h2>
            <small>Total payments received</small>
          </div>

          <div className="card">
            <p>Active Schemes</p>
            <h2>320</h2>
            <small>Currently enrolled customers</small>
          </div>

        </section>

        <section className="customer-selection">
          <Charts />
        </section>
        


      </main>
    </div>
  );
}

export default App;
