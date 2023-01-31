<script>
    export let user;
</script>

<ul class="list">
    <li>
        <p>Full name:{user.firstName} {user.lastName}</p>
    </li>
    <li>
        <p>Car: {user.carBrand} {user.carModel}</p>
    </li>
    <li>
        <p>Zip Code: {user.zipCode}</p>
    </li>
    <li>
        <p>First Registration: {user.firstRegistration}</p>
    </li>
</ul>
