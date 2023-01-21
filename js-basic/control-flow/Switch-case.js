let role = 'moderator';

switch (role) {
    case 'gest':
        console.log('gest user');
        break;
    
    case 'moderator':
        console.log('moderator user');
        break;
    
    default:
console.log('unknown user')
    
}

if (role === 'gest') console.log('gest');
else if (role === 'moderator') console.log('moderator');
else console.log('unknown user')