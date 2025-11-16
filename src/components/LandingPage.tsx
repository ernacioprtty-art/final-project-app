import './LandingPage.css'
import { useNavigate } from 'react-router-dom'

function LandingPage() {

    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/product-selection");
    }

    return (
        <>
            <div className='background'>
                <div className='blur-filter'></div>
            </div>

            <div className='container'>
                <div className="container-landing">
                    <h1>Conference Expense Planner</h1>
                    <p>Plan your next major events with us</p>
                    <button onClick={handleGetStarted}>Get Started</button>
                </div>

                <div className="container-description">
                    <section>
                        <h3>
                            Welcome to BudgetEase Solutions, your trusted partner in simplifying
                            budget management and financial solutions. At BudgetEase, we understand the
                            importance of effective budget planning and strive to provide intuitive, 
                            user-friendly solutions to meet the diverse needs of our clients.
                        </h3>
                    </section>
                    <br />
                    <section>
                        <h3>
                            With a commitment to efficiency and innovation, we empower individuals and businesss
                            to take control of their finances and achieve their goals with ease.
                        </h3>
                    </section>
                    <br />
                    <section>
                        <h3>
                            At BudgetEase Solutions, our mission is to make budgeting effortless and accessible
                            for everyone. Whether you're a small business power, a busy professional, or an individual
                            looking to manage your personal finances, we offer tailored solutions to streamline your
                            budgeting process.
                        </h3>
                    </section>
                </div>
            </div>    
        </>
    )
}

export default LandingPage