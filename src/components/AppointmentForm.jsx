import React from 'react';

const AppointmentForm = () => {
    const doctors = [
        {
            "id": 1,
            "name": "Dr. Priya Sharma",
            "specialization": "Pediatrician",
            "days": "Mon–Fri",
            "timing": "8:00 AM - 5:00 PM",
            "image": "/images/priya.jpg",
            "experience": "12+ years",
            "education": "MBBS, MD Pediatrics, DM Neonatology",
            "specialties": ["General Child Care", "Vaccination", "Growth Monitoring"],
            "languages": ["Hindi", "English", "Punjabi"],
        },
        {
            "id": 2,
            "name": "Dr. Rajesh Kumar",
            "specialization": "Neonatologist",
            "days": "Mon–Fri",
            "timing": "8:00 AM - 6:00 PM",
            "image": "/images/rajesh.jpg",
            "experience": "5+ years",
            "education": "MBBS, MD Pediatrics, DM Neonatology",
            "specialties": ["Newborn Care", "NICU Management", "Premature Babies"],
            "languages": ["Tamil", "English", "Hindi"],
        },
        {
            "id": 3,
            "name": "Dr. Kavitha Menon",
            "specialization": "Pediatric Surgeon",
            "days": "Mon–Fri",
            "timing": "9:00 AM - 4:00 PM",
            "image": "/images/kavitha.jpg",
            "experience": "8+ years",
            "education": "MBBS, MS Surgery, MCh Pediatric Surgery",
            "specialties": ["Pediatric Surgery", "Hernia Repair", "Congenital Defects"],
            "languages": ["Marathi", "Hindi", "English"],
        },
        {
            "id": 4,
            "name": "Dr. Arjun Reddy",
            "specialization": "Child Psychologist",
            "days": "Mon–Fri",
            "timing": "10:00 AM - 6:00 PM",
            "image": "/images/rajesh1.jpg",
            "experience": "10+ years",
            "education": "MBBS, MD Psychiatry, Fellowship Child Psychology",
            "specialties": ["Behavioral Issues", "ADHD Treatment", "Child Counseling"],
            "languages": ["Telugu", "Tamil", "English", "Hindi"],
        }
    ];

    const timeSlots = [
        "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
        "11:00 AM", "11:30 AM", "04:00 PM", "04:30 PM",
        "05:00 PM", "05:30 PM"
    ];

    return (
        <div className='my-5'>
            <div className="container px-3 px-lg-4" id='Appointment-Form'>
                <div className="card appointment-card">
                    <div className="card-body p-3 p-lg-4">
                        <h3 className='mb-3 mb-lg-4 text-center text-dark fw-bold'>
                            Book <span className="d-none d-sm-inline">an</span> Appointment
                        </h3>
                        <form>
                            <div className="row g-2 g-lg-3">
                                <div className="col-12 col-lg-4">
                                    <input 
                                        className='form-control'
                                        type="text" 
                                        placeholder='Enter Your Name' 
                                        name='name'
                                        required
                                    />
                                </div>

                                {/* Phone Field */}
                                <div className="col-12 col-lg-4">
                                    <input 
                                        className='form-control'
                                        type="tel" 
                                        placeholder='Phone Number'
                                        name='phone'
                                        required
                                    />
                                </div>

                                {/* Doctor Selection */}
                                <div className="col-12 col-lg-4">
                                    <select className='form-control' name="doctorName" required>
                                        <option value="">Choose Doctor...</option>
                                        {doctors.map(d => (
                                            <option key={d.id} value={d.name}>
                                                {d.name} - {d.specialization}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Date Field */}
                                <div className="col-6 col-lg-3">
                                    <input
                                        className='form-control'
                                        placeholder='Date'
                                        type="date"
                                        name="date"
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                    />
                                </div>

                                {/* Time Selection */}
                                <div className="col-6 col-lg-3">
                                    <select className='form-control' name="time" required>
                                        <option value="">Select Time...</option>
                                        {timeSlots.map(t => (
                                            <option key={t} value={t}>{t}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Symptoms/Issue Description */}
                                <div className="col-12 col-lg-6">
                                    <textarea
                                        className='form-control'
                                        name="issue"
                                        rows="2"
                                        placeholder="Describe symptoms or reason for visit (optional)..."
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="row mt-3 mt-lg-4">
                                <div className="col-12 col-lg-2 ms-lg-auto">
                                    <button 
                                        type="submit" 
                                        className='btn w-100 fw-bold' 
                                        style={{ 
                                            background: 'linear-gradient(135deg, #ee0d0d, #b60505)',
                                            color: 'white' 
                                        }}
                                    >
                                        <span className="d-none d-lg-inline">Book Now</span>
                                        <span className="d-lg-none">Book Appointment</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentForm;
