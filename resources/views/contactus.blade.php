<script type="text/javascript">

	   window.onload = function() {
        L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

        var map = L.mapquest.map('map', {
          center: [13.061647, 80.246919],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });

        map.addControl(L.mapquest.control());
      }


</script>
<style type="text/css">
	.title {
    margin-top: 0;
    padding-bottom: 30px;
    position: relative;
    text-align: center;
    text-transform: capitalize;
    font-size: 28px;
    margin-bottom: 20px;
}
</style>
<!DOCTYPE html>
<title>KGP</title>
@extends('template')

@section('main')
<div class="about-background">
<div class="col-md-6" style="padding:0px;">
 <div id="map" style="width: 100%; height: 600px;margin-top: 70px;"></div>
 </div>
 <div class="col-md-6" style="margin-top:60px;">
<div class="overview-content">
<h1 class="title">
Get In Touch
</h1>
<div class="overview-info" style="overflow:hidden;">
<p class="col-md-4 col-sm-5 xl-none"> Address </p><p class="col-md-1 col-sm-1 xl-none"> : </p>
<p class="col-md-6 col-sm-6">   

KGP Techsolutions LLP <br>
#110/1, 5th floor, Arcade Center,<br>
Nungambakkam High Road,<br>
Nungambakkam,<br>
Chennai - 600034<br>
</p>
<br>

<p class="col-md-4 col-sm-5 xl-none"> Email </p><p class="col-md-1 col-sm-1 xl-none"> : </p>
<p class="col-md-6 col-sm-6">info@kgptechsolutions.com<br></p>
<br>
<p class="col-md-4 col-sm-5 xl-none"> Contact Number </p><p class="col-md-1 col-sm-1 xl-none"> : </p>
 <p class="col-md-6 col-sm-6">044-42950004<br>


</p>

</div>





</div>

</div>
</div>
</main>
@stop