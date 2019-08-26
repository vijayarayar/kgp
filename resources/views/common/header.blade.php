<!DOCTYPE html>
<header class="max-header">
<div class="container">
<div class="header-left">
	<a href="{{ url('/') }}" class="logo-img">
<img style="width:300px;height:88px;" src="images/logo-img-old.png">
	 </a>
</div>
<div class="header-right">
	<ul class="header-menu">
	<li> <a href="{{ url('about') }}"> About </a> </li>
	<li> <a href="{{ url('solution') }}"> Solutions </a> </li>
	<li> <a href="{{ url('careers') }}"> Careers </a> </li>
	<li> <a href="{{ url('contactus') }}"> Contact </a> </li>		
	</ul>
</div>
<div class="min-menu">
<a id="icon-click" class="thumb">
	<img src="images/logo-icon.png" class="logo-icon">
</a>	
</div>
<aside class="off-canvas-menu">
			<span class="close-btn"></span>
			<nav class="vertical-navigation">
			<ul  class="close-menu">
			<li> <a href="{{ url('about') }}"> About </a> </li>
	<li> <a href="{{ url('solution') }}"> Solutions </a> </li>
	<li> <a href="{{ url('careers') }}"> Careers </a> </li>
	<li> <a href="{{ url('contactus') }}"> Contact </a> </li>	
</ul>
</nav>
		</aside>	
		<div class="site-backdrop"></div>
</header>
