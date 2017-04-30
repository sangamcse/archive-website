
<link rel='stylesheet prefetch' href='http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css'>
  <link rel="stylesheet" href="css/regist.css">
  <body>

<div class="content">
	<div class="container">
			<div class="menu">

			<h2 class="btn-connexion">REGISTER</h2>
			</div>
			<div class="connexion">
        <div class="btn-connexion">
  				<div class="contact-form">
            <form action="" method="post">
  					<label>FIRST NAME</label>
  					<input placeholder="" type="text" name="first">

  					<label>LAST NAME</label>
  					<input placeholder="" type="text" name="last">

  					<label>EMAIL</label>
  					<input placeholder="" type="text" name="email">

  					<label>PHONE</label>
  					<input placeholder="" type="text" name="phone">
            <br/><br/>

  					<input class="button button-teal submit" style="left: 6.5em; cursor: pointer; width: auto;" value="REGISTER FREE" type="submit">
          </form>

  				</div>
  			</div>

			</div>



	</div>

</div>


</body>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='http://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js'></script>

    <script src="js/regist.js"></script>
<?php
require('config.inc');
if (isset($_POST['first'])&&isset($_POST['last'])) {
  $first=$_POST['first'];
  $last=$_POST['last'];
  $email=$_POST['email'];
  $phone=$_POST['phone'];

  $query="INSERT INTO 'regist' (firstname,lastname,email,phone) VALUES('$first','$last','$email','$phone')";
  $result= mysqli_query($conn,$query);

  if ($result) {
    echo "You are successfully registered";
  }else{
    echo "Registration failed..!";
  }
}
 ?>
