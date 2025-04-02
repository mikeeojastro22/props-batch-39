import './User.css';
import bankUsers from '../../assets/bankUsers.json';

// props are parameters
function User(props){
    const { employee, bankName, address } = props;
    const { name, balance, email } = employee;
    const { addressNo, street, city } = address;
    return (
        <div className='user'>
            <h1>{bankName}</h1>
            <h1>{name}</h1>
            <h1>{balance}</h1>
            <h1>{email}</h1>
            <h1>{addressNo}</h1>
            <h1>{street}</h1>
            <h1>{city}</h1>
            {/* 
                bankUsers - array
                map - traverse through our array
                user - representation of each element in our bankUsers array
                array.map(arrowFunctioon)
            */}
            {
                bankUsers.map((user) => {
                    return <div key={user.id}> {user.name} {user.balance} </div>
                })
            }
        </div>
    );
}

export default User;