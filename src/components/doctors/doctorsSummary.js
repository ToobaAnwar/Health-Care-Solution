import React from 'react';

const DoctorSummary = ({doctor}) => {
    const style = {
        borderStyle: 'outset',
    }
    return(
        <div>
            <div className="card  doctor-summary">
               <div className="card-content grey-text text-darken-3">
                   <h3 style={{ color: 'MidnightBlue'}}> Dr { doctor.authorFirstName } { doctor.authorLastName }</h3>
                   <p style={{ color: 'black'}} >Qualification: { doctor.qualification }</p>
               </div>
           </div>

        </div>
    )
}

export default DoctorSummary;