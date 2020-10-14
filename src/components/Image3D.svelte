<!--suppress HtmlUnknownTarget -->
<style>
	.image3d-container {
		position: relative;
		display: inline-block;
		vertical-align: middle;
		transform-style: preserve-3d;
		perspective: 1000px;
	}

	.image3d-container .image3d-content {
		position: relative;
		width: 15vw;
		height: 20vw;
		transform: rotateX(0) rotateY(0);
		box-shadow: 0 2px 15px #10161a;
		border-radius: 5px;
		pointer-events: none;
		text-align: center;
		transition: 100ms linear transform;
		overflow: hidden;
	}

	.image3d-container .image3d-content span {
		position: absolute;
		width: 96%;
		left: 2%;
		top: 50%;
		font-size: 1.5vw;
		font-weight: bold;
		color: #f5f8fa;
	}

	.image3d-container .image3d-content:before {
		content: '';
		position: absolute;
		width: 200%;
		height: 200%;
		left: -50%;
		top: -50%;
		background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2));
	}

	.image3d-container .image3d {
		position: absolute;
		z-index: 1;
		width: 10%;
		height: 10%;
	}

	.image3d-container a.image3d:focus {
		box-shadow: none !important;
		outline: none !important;
	}

	.image3d-container .image3d-1 {
		top: 0;
		left: 0;
	}

	.image3d-container .image3d-1:hover ~ .image3d-content {
		transform: rotateX(20deg) rotateY(-20deg);
	}

	.image3d-container .image3d-1:hover ~ .image3d-content:before {
		transform: translateY(20%);
	}

	.image3d-container .image3d-2 {
		top: 0;
		left: 10%;
	}

	.image3d-container .image3d-2:hover ~ .image3d-content {
		transform: rotateX(20deg) rotateY(-15deg);
	}

	.image3d-container .image3d-2:hover ~ .image3d-content:before {
		transform: translateY(20%);
	}

	.image3d-container .image3d-3 {
		top: 0;
		left: 20%;
	}

	.image3d-container .image3d-3:hover ~ .image3d-content {
		transform: rotateX(20deg) rotateY(-10deg);
	}

	.image3d-container .image3d-3:hover ~ .image3d-content:before {
		transform: translateY(20%);
	}

	.image3d-container .image3d-4 {
		top: 0;
		left: 30%;
	}

	.image3d-container .image3d-4:hover ~ .image3d-content {
		transform: rotateX(20deg) rotateY(-5deg);
	}

	.image3d-container .image3d-4:hover ~ .image3d-content:before {
		transform: translateY(20%);
	}

	.image3d-container .image3d-5 {
		top: 0;
		left: 40%;
	}

	.image3d-container .image3d-5:hover ~ .image3d-content {
		transform: rotateX(20deg) rotateY(0deg);
	}

	.image3d-container .image3d-5:hover ~ .image3d-content:before {
		transform: translateY(20%);
	}

	.image3d-container .image3d-6 {
		top: 0;
		left: 50%;
	}

	.image3d-container .image3d-6:hover ~ .image3d-content {
		transform: rotateX(20deg) rotateY(5deg);
	}

	.image3d-container .image3d-6:hover ~ .image3d-content:before {
		transform: translateY(20%);
	}

	.image3d-container .image3d-7 {
		top: 0;
		left: 60%;
	}

	.image3d-container .image3d-7:hover ~ .image3d-content {
		transform: rotateX(20deg) rotateY(10deg);
	}

	.image3d-container .image3d-7:hover ~ .image3d-content:before {
		transform: translateY(20%);
	}

	.image3d-container .image3d-8 {
		top: 0;
		left: 70%;
	}

	.image3d-container .image3d-8:hover ~ .image3d-content {
		transform: rotateX(20deg) rotateY(15deg);
	}

	.image3d-container .image3d-8:hover ~ .image3d-content:before {
		transform: translateY(20%);
	}

	.image3d-container .image3d-9 {
		top: 0;
		left: 80%;
	}

	.image3d-container .image3d-9:hover ~ .image3d-content {
		transform: rotateX(20deg) rotateY(20deg);
	}

	.image3d-container .image3d-9:hover ~ .image3d-content:before {
		transform: translateY(20%);
	}

	.image3d-container .image3d-10 {
		top: 0;
		left: 90%;
	}

	.image3d-container .image3d-10:hover ~ .image3d-content {
		transform: rotateX(20deg) rotateY(25deg);
	}

	.image3d-container .image3d-10:hover ~ .image3d-content:before {
		transform: translateY(20%);
	}

	.image3d-container .image3d-11 {
		top: 10%;
		left: 0;
	}

	.image3d-container .image3d-11:hover ~ .image3d-content {
		transform: rotateX(15deg) rotateY(-20deg);
	}

	.image3d-container .image3d-11:hover ~ .image3d-content:before {
		transform: translateY(15%);
	}

	.image3d-container .image3d-12 {
		top: 10%;
		left: 10%;
	}

	.image3d-container .image3d-12:hover ~ .image3d-content {
		transform: rotateX(15deg) rotateY(-15deg);
	}

	.image3d-container .image3d-12:hover ~ .image3d-content:before {
		transform: translateY(15%);
	}

	.image3d-container .image3d-13 {
		top: 10%;
		left: 20%;
	}

	.image3d-container .image3d-13:hover ~ .image3d-content {
		transform: rotateX(15deg) rotateY(-10deg);
	}

	.image3d-container .image3d-13:hover ~ .image3d-content:before {
		transform: translateY(15%);
	}

	.image3d-container .image3d-14 {
		top: 10%;
		left: 30%;
	}

	.image3d-container .image3d-14:hover ~ .image3d-content {
		transform: rotateX(15deg) rotateY(-5deg);
	}

	.image3d-container .image3d-14:hover ~ .image3d-content:before {
		transform: translateY(15%);
	}

	.image3d-container .image3d-15 {
		top: 10%;
		left: 40%;
	}

	.image3d-container .image3d-15:hover ~ .image3d-content {
		transform: rotateX(15deg) rotateY(0deg);
	}

	.image3d-container .image3d-15:hover ~ .image3d-content:before {
		transform: translateY(15%);
	}

	.image3d-container .image3d-16 {
		top: 10%;
		left: 50%;
	}

	.image3d-container .image3d-16:hover ~ .image3d-content {
		transform: rotateX(15deg) rotateY(5deg);
	}

	.image3d-container .image3d-16:hover ~ .image3d-content:before {
		transform: translateY(15%);
	}

	.image3d-container .image3d-17 {
		top: 10%;
		left: 60%;
	}

	.image3d-container .image3d-17:hover ~ .image3d-content {
		transform: rotateX(15deg) rotateY(10deg);
	}

	.image3d-container .image3d-17:hover ~ .image3d-content:before {
		transform: translateY(15%);
	}

	.image3d-container .image3d-18 {
		top: 10%;
		left: 70%;
	}

	.image3d-container .image3d-18:hover ~ .image3d-content {
		transform: rotateX(15deg) rotateY(15deg);
	}

	.image3d-container .image3d-18:hover ~ .image3d-content:before {
		transform: translateY(15%);
	}

	.image3d-container .image3d-19 {
		top: 10%;
		left: 80%;
	}

	.image3d-container .image3d-19:hover ~ .image3d-content {
		transform: rotateX(15deg) rotateY(20deg);
	}

	.image3d-container .image3d-19:hover ~ .image3d-content:before {
		transform: translateY(15%);
	}

	.image3d-container .image3d-20 {
		top: 10%;
		left: 90%;
	}

	.image3d-container .image3d-20:hover ~ .image3d-content {
		transform: rotateX(15deg) rotateY(25deg);
	}

	.image3d-container .image3d-20:hover ~ .image3d-content:before {
		transform: translateY(15%);
	}

	.image3d-container .image3d-21 {
		top: 20%;
		left: 0;
	}

	.image3d-container .image3d-21:hover ~ .image3d-content {
		transform: rotateX(10deg) rotateY(-20deg);
	}

	.image3d-container .image3d-21:hover ~ .image3d-content:before {
		transform: translateY(10%);
	}

	.image3d-container .image3d-22 {
		top: 20%;
		left: 10%;
	}

	.image3d-container .image3d-22:hover ~ .image3d-content {
		transform: rotateX(10deg) rotateY(-15deg);
	}

	.image3d-container .image3d-22:hover ~ .image3d-content:before {
		transform: translateY(10%);
	}

	.image3d-container .image3d-23 {
		top: 20%;
		left: 20%;
	}

	.image3d-container .image3d-23:hover ~ .image3d-content {
		transform: rotateX(10deg) rotateY(-10deg);
	}

	.image3d-container .image3d-23:hover ~ .image3d-content:before {
		transform: translateY(10%);
	}

	.image3d-container .image3d-24 {
		top: 20%;
		left: 30%;
	}

	.image3d-container .image3d-24:hover ~ .image3d-content {
		transform: rotateX(10deg) rotateY(-5deg);
	}

	.image3d-container .image3d-24:hover ~ .image3d-content:before {
		transform: translateY(10%);
	}

	.image3d-container .image3d-25 {
		top: 20%;
		left: 40%;
	}

	.image3d-container .image3d-25:hover ~ .image3d-content {
		transform: rotateX(10deg) rotateY(0deg);
	}

	.image3d-container .image3d-25:hover ~ .image3d-content:before {
		transform: translateY(10%);
	}

	.image3d-container .image3d-26 {
		top: 20%;
		left: 50%;
	}

	.image3d-container .image3d-26:hover ~ .image3d-content {
		transform: rotateX(10deg) rotateY(5deg);
	}

	.image3d-container .image3d-26:hover ~ .image3d-content:before {
		transform: translateY(10%);
	}

	.image3d-container .image3d-27 {
		top: 20%;
		left: 60%;
	}

	.image3d-container .image3d-27:hover ~ .image3d-content {
		transform: rotateX(10deg) rotateY(10deg);
	}

	.image3d-container .image3d-27:hover ~ .image3d-content:before {
		transform: translateY(10%);
	}

	.image3d-container .image3d-28 {
		top: 20%;
		left: 70%;
	}

	.image3d-container .image3d-28:hover ~ .image3d-content {
		transform: rotateX(10deg) rotateY(15deg);
	}

	.image3d-container .image3d-28:hover ~ .image3d-content:before {
		transform: translateY(10%);
	}

	.image3d-container .image3d-29 {
		top: 20%;
		left: 80%;
	}

	.image3d-container .image3d-29:hover ~ .image3d-content {
		transform: rotateX(10deg) rotateY(20deg);
	}

	.image3d-container .image3d-29:hover ~ .image3d-content:before {
		transform: translateY(10%);
	}

	.image3d-container .image3d-30 {
		top: 20%;
		left: 90%;
	}

	.image3d-container .image3d-30:hover ~ .image3d-content {
		transform: rotateX(10deg) rotateY(25deg);
	}

	.image3d-container .image3d-30:hover ~ .image3d-content:before {
		transform: translateY(10%);
	}

	.image3d-container .image3d-31 {
		top: 30%;
		left: 0;
	}

	.image3d-container .image3d-31:hover ~ .image3d-content {
		transform: rotateX(5deg) rotateY(-20deg);
	}

	.image3d-container .image3d-31:hover ~ .image3d-content:before {
		transform: translateY(5%);
	}

	.image3d-container .image3d-32 {
		top: 30%;
		left: 10%;
	}

	.image3d-container .image3d-32:hover ~ .image3d-content {
		transform: rotateX(5deg) rotateY(-15deg);
	}

	.image3d-container .image3d-32:hover ~ .image3d-content:before {
		transform: translateY(5%);
	}

	.image3d-container .image3d-33 {
		top: 30%;
		left: 20%;
	}

	.image3d-container .image3d-33:hover ~ .image3d-content {
		transform: rotateX(5deg) rotateY(-10deg);
	}

	.image3d-container .image3d-33:hover ~ .image3d-content:before {
		transform: translateY(5%);
	}

	.image3d-container .image3d-34 {
		top: 30%;
		left: 30%;
	}

	.image3d-container .image3d-34:hover ~ .image3d-content {
		transform: rotateX(5deg) rotateY(-5deg);
	}

	.image3d-container .image3d-34:hover ~ .image3d-content:before {
		transform: translateY(5%);
	}

	.image3d-container .image3d-35 {
		top: 30%;
		left: 40%;
	}

	.image3d-container .image3d-35:hover ~ .image3d-content {
		transform: rotateX(5deg) rotateY(0deg);
	}

	.image3d-container .image3d-35:hover ~ .image3d-content:before {
		transform: translateY(5%);
	}

	.image3d-container .image3d-36 {
		top: 30%;
		left: 50%;
	}

	.image3d-container .image3d-36:hover ~ .image3d-content {
		transform: rotateX(5deg) rotateY(5deg);
	}

	.image3d-container .image3d-36:hover ~ .image3d-content:before {
		transform: translateY(5%);
	}

	.image3d-container .image3d-37 {
		top: 30%;
		left: 60%;
	}

	.image3d-container .image3d-37:hover ~ .image3d-content {
		transform: rotateX(5deg) rotateY(10deg);
	}

	.image3d-container .image3d-37:hover ~ .image3d-content:before {
		transform: translateY(5%);
	}

	.image3d-container .image3d-38 {
		top: 30%;
		left: 70%;
	}

	.image3d-container .image3d-38:hover ~ .image3d-content {
		transform: rotateX(5deg) rotateY(15deg);
	}

	.image3d-container .image3d-38:hover ~ .image3d-content:before {
		transform: translateY(5%);
	}

	.image3d-container .image3d-39 {
		top: 30%;
		left: 80%;
	}

	.image3d-container .image3d-39:hover ~ .image3d-content {
		transform: rotateX(5deg) rotateY(20deg);
	}

	.image3d-container .image3d-39:hover ~ .image3d-content:before {
		transform: translateY(5%);
	}

	.image3d-container .image3d-40 {
		top: 30%;
		left: 90%;
	}

	.image3d-container .image3d-40:hover ~ .image3d-content {
		transform: rotateX(5deg) rotateY(25deg);
	}

	.image3d-container .image3d-40:hover ~ .image3d-content:before {
		transform: translateY(5%);
	}

	.image3d-container .image3d-41 {
		top: 40%;
		left: 0;
	}

	.image3d-container .image3d-41:hover ~ .image3d-content {
		transform: rotateX(0deg) rotateY(-20deg);
	}

	.image3d-container .image3d-41:hover ~ .image3d-content:before {
		transform: translateY(0%);
	}

	.image3d-container .image3d-42 {
		top: 40%;
		left: 10%;
	}

	.image3d-container .image3d-42:hover ~ .image3d-content {
		transform: rotateX(0deg) rotateY(-15deg);
	}

	.image3d-container .image3d-42:hover ~ .image3d-content:before {
		transform: translateY(0%);
	}

	.image3d-container .image3d-43 {
		top: 40%;
		left: 20%;
	}

	.image3d-container .image3d-43:hover ~ .image3d-content {
		transform: rotateX(0deg) rotateY(-10deg);
	}

	.image3d-container .image3d-43:hover ~ .image3d-content:before {
		transform: translateY(0%);
	}

	.image3d-container .image3d-44 {
		top: 40%;
		left: 30%;
	}

	.image3d-container .image3d-44:hover ~ .image3d-content {
		transform: rotateX(0deg) rotateY(-5deg);
	}

	.image3d-container .image3d-44:hover ~ .image3d-content:before {
		transform: translateY(0%);
	}

	.image3d-container .image3d-45 {
		top: 40%;
		left: 40%;
	}

	.image3d-container .image3d-45:hover ~ .image3d-content {
		transform: rotateX(0deg) rotateY(0deg);
	}

	.image3d-container .image3d-45:hover ~ .image3d-content:before {
		transform: translateY(0%);
	}

	.image3d-container .image3d-46 {
		top: 40%;
		left: 50%;
	}

	.image3d-container .image3d-46:hover ~ .image3d-content {
		transform: rotateX(0deg) rotateY(5deg);
	}

	.image3d-container .image3d-46:hover ~ .image3d-content:before {
		transform: translateY(0%);
	}

	.image3d-container .image3d-47 {
		top: 40%;
		left: 60%;
	}

	.image3d-container .image3d-47:hover ~ .image3d-content {
		transform: rotateX(0deg) rotateY(10deg);
	}

	.image3d-container .image3d-47:hover ~ .image3d-content:before {
		transform: translateY(0%);
	}

	.image3d-container .image3d-48 {
		top: 40%;
		left: 70%;
	}

	.image3d-container .image3d-48:hover ~ .image3d-content {
		transform: rotateX(0deg) rotateY(15deg);
	}

	.image3d-container .image3d-48:hover ~ .image3d-content:before {
		transform: translateY(0%);
	}

	.image3d-container .image3d-49 {
		top: 40%;
		left: 80%;
	}

	.image3d-container .image3d-49:hover ~ .image3d-content {
		transform: rotateX(0deg) rotateY(20deg);
	}

	.image3d-container .image3d-49:hover ~ .image3d-content:before {
		transform: translateY(0%);
	}

	.image3d-container .image3d-50 {
		top: 40%;
		left: 90%;
	}

	.image3d-container .image3d-50:hover ~ .image3d-content {
		transform: rotateX(0deg) rotateY(25deg);
	}

	.image3d-container .image3d-50:hover ~ .image3d-content:before {
		transform: translateY(0%);
	}

	.image3d-container .image3d-51 {
		top: 50%;
		left: 0;
	}

	.image3d-container .image3d-51:hover ~ .image3d-content {
		transform: rotateX(-5deg) rotateY(-20deg);
	}

	.image3d-container .image3d-51:hover ~ .image3d-content:before {
		transform: translateY(-5%);
	}

	.image3d-container .image3d-52 {
		top: 50%;
		left: 10%;
	}

	.image3d-container .image3d-52:hover ~ .image3d-content {
		transform: rotateX(-5deg) rotateY(-15deg);
	}

	.image3d-container .image3d-52:hover ~ .image3d-content:before {
		transform: translateY(-5%);
	}

	.image3d-container .image3d-53 {
		top: 50%;
		left: 20%;
	}

	.image3d-container .image3d-53:hover ~ .image3d-content {
		transform: rotateX(-5deg) rotateY(-10deg);
	}

	.image3d-container .image3d-53:hover ~ .image3d-content:before {
		transform: translateY(-5%);
	}

	.image3d-container .image3d-54 {
		top: 50%;
		left: 30%;
	}

	.image3d-container .image3d-54:hover ~ .image3d-content {
		transform: rotateX(-5deg) rotateY(-5deg);
	}

	.image3d-container .image3d-54:hover ~ .image3d-content:before {
		transform: translateY(-5%);
	}

	.image3d-container .image3d-55 {
		top: 50%;
		left: 40%;
	}

	.image3d-container .image3d-55:hover ~ .image3d-content {
		transform: rotateX(-5deg) rotateY(0deg);
	}

	.image3d-container .image3d-55:hover ~ .image3d-content:before {
		transform: translateY(-5%);
	}

	.image3d-container .image3d-56 {
		top: 50%;
		left: 50%;
	}

	.image3d-container .image3d-56:hover ~ .image3d-content {
		transform: rotateX(-5deg) rotateY(5deg);
	}

	.image3d-container .image3d-56:hover ~ .image3d-content:before {
		transform: translateY(-5%);
	}

	.image3d-container .image3d-57 {
		top: 50%;
		left: 60%;
	}

	.image3d-container .image3d-57:hover ~ .image3d-content {
		transform: rotateX(-5deg) rotateY(10deg);
	}

	.image3d-container .image3d-57:hover ~ .image3d-content:before {
		transform: translateY(-5%);
	}

	.image3d-container .image3d-58 {
		top: 50%;
		left: 70%;
	}

	.image3d-container .image3d-58:hover ~ .image3d-content {
		transform: rotateX(-5deg) rotateY(15deg);
	}

	.image3d-container .image3d-58:hover ~ .image3d-content:before {
		transform: translateY(-5%);
	}

	.image3d-container .image3d-59 {
		top: 50%;
		left: 80%;
	}

	.image3d-container .image3d-59:hover ~ .image3d-content {
		transform: rotateX(-5deg) rotateY(20deg);
	}

	.image3d-container .image3d-59:hover ~ .image3d-content:before {
		transform: translateY(-5%);
	}

	.image3d-container .image3d-60 {
		top: 50%;
		left: 90%;
	}

	.image3d-container .image3d-60:hover ~ .image3d-content {
		transform: rotateX(-5deg) rotateY(25deg);
	}

	.image3d-container .image3d-60:hover ~ .image3d-content:before {
		transform: translateY(-5%);
	}

	.image3d-container .image3d-61 {
		top: 60%;
		left: 0;
	}

	.image3d-container .image3d-61:hover ~ .image3d-content {
		transform: rotateX(-10deg) rotateY(-20deg);
	}

	.image3d-container .image3d-61:hover ~ .image3d-content:before {
		transform: translateY(-10%);
	}

	.image3d-container .image3d-62 {
		top: 60%;
		left: 10%;
	}

	.image3d-container .image3d-62:hover ~ .image3d-content {
		transform: rotateX(-10deg) rotateY(-15deg);
	}

	.image3d-container .image3d-62:hover ~ .image3d-content:before {
		transform: translateY(-10%);
	}

	.image3d-container .image3d-63 {
		top: 60%;
		left: 20%;
	}

	.image3d-container .image3d-63:hover ~ .image3d-content {
		transform: rotateX(-10deg) rotateY(-10deg);
	}

	.image3d-container .image3d-63:hover ~ .image3d-content:before {
		transform: translateY(-10%);
	}

	.image3d-container .image3d-64 {
		top: 60%;
		left: 30%;
	}

	.image3d-container .image3d-64:hover ~ .image3d-content {
		transform: rotateX(-10deg) rotateY(-5deg);
	}

	.image3d-container .image3d-64:hover ~ .image3d-content:before {
		transform: translateY(-10%);
	}

	.image3d-container .image3d-65 {
		top: 60%;
		left: 40%;
	}

	.image3d-container .image3d-65:hover ~ .image3d-content {
		transform: rotateX(-10deg) rotateY(0deg);
	}

	.image3d-container .image3d-65:hover ~ .image3d-content:before {
		transform: translateY(-10%);
	}

	.image3d-container .image3d-66 {
		top: 60%;
		left: 50%;
	}

	.image3d-container .image3d-66:hover ~ .image3d-content {
		transform: rotateX(-10deg) rotateY(5deg);
	}

	.image3d-container .image3d-66:hover ~ .image3d-content:before {
		transform: translateY(-10%);
	}

	.image3d-container .image3d-67 {
		top: 60%;
		left: 60%;
	}

	.image3d-container .image3d-67:hover ~ .image3d-content {
		transform: rotateX(-10deg) rotateY(10deg);
	}

	.image3d-container .image3d-67:hover ~ .image3d-content:before {
		transform: translateY(-10%);
	}

	.image3d-container .image3d-68 {
		top: 60%;
		left: 70%;
	}

	.image3d-container .image3d-68:hover ~ .image3d-content {
		transform: rotateX(-10deg) rotateY(15deg);
	}

	.image3d-container .image3d-68:hover ~ .image3d-content:before {
		transform: translateY(-10%);
	}

	.image3d-container .image3d-69 {
		top: 60%;
		left: 80%;
	}

	.image3d-container .image3d-69:hover ~ .image3d-content {
		transform: rotateX(-10deg) rotateY(20deg);
	}

	.image3d-container .image3d-69:hover ~ .image3d-content:before {
		transform: translateY(-10%);
	}

	.image3d-container .image3d-70 {
		top: 60%;
		left: 90%;
	}

	.image3d-container .image3d-70:hover ~ .image3d-content {
		transform: rotateX(-10deg) rotateY(25deg);
	}

	.image3d-container .image3d-70:hover ~ .image3d-content:before {
		transform: translateY(-10%);
	}

	.image3d-container .image3d-71 {
		top: 70%;
		left: 0;
	}

	.image3d-container .image3d-71:hover ~ .image3d-content {
		transform: rotateX(-15deg) rotateY(-20deg);
	}

	.image3d-container .image3d-71:hover ~ .image3d-content:before {
		transform: translateY(-15%);
	}

	.image3d-container .image3d-72 {
		top: 70%;
		left: 10%;
	}

	.image3d-container .image3d-72:hover ~ .image3d-content {
		transform: rotateX(-15deg) rotateY(-15deg);
	}

	.image3d-container .image3d-72:hover ~ .image3d-content:before {
		transform: translateY(-15%);
	}

	.image3d-container .image3d-73 {
		top: 70%;
		left: 20%;
	}

	.image3d-container .image3d-73:hover ~ .image3d-content {
		transform: rotateX(-15deg) rotateY(-10deg);
	}

	.image3d-container .image3d-73:hover ~ .image3d-content:before {
		transform: translateY(-15%);
	}

	.image3d-container .image3d-74 {
		top: 70%;
		left: 30%;
	}

	.image3d-container .image3d-74:hover ~ .image3d-content {
		transform: rotateX(-15deg) rotateY(-5deg);
	}

	.image3d-container .image3d-74:hover ~ .image3d-content:before {
		transform: translateY(-15%);
	}

	.image3d-container .image3d-75 {
		top: 70%;
		left: 40%;
	}

	.image3d-container .image3d-75:hover ~ .image3d-content {
		transform: rotateX(-15deg) rotateY(0deg);
	}

	.image3d-container .image3d-75:hover ~ .image3d-content:before {
		transform: translateY(-15%);
	}

	.image3d-container .image3d-76 {
		top: 70%;
		left: 50%;
	}

	.image3d-container .image3d-76:hover ~ .image3d-content {
		transform: rotateX(-15deg) rotateY(5deg);
	}

	.image3d-container .image3d-76:hover ~ .image3d-content:before {
		transform: translateY(-15%);
	}

	.image3d-container .image3d-77 {
		top: 70%;
		left: 60%;
	}

	.image3d-container .image3d-77:hover ~ .image3d-content {
		transform: rotateX(-15deg) rotateY(10deg);
	}

	.image3d-container .image3d-77:hover ~ .image3d-content:before {
		transform: translateY(-15%);
	}

	.image3d-container .image3d-78 {
		top: 70%;
		left: 70%;
	}

	.image3d-container .image3d-78:hover ~ .image3d-content {
		transform: rotateX(-15deg) rotateY(15deg);
	}

	.image3d-container .image3d-78:hover ~ .image3d-content:before {
		transform: translateY(-15%);
	}

	.image3d-container .image3d-79 {
		top: 70%;
		left: 80%;
	}

	.image3d-container .image3d-79:hover ~ .image3d-content {
		transform: rotateX(-15deg) rotateY(20deg);
	}

	.image3d-container .image3d-79:hover ~ .image3d-content:before {
		transform: translateY(-15%);
	}

	.image3d-container .image3d-80 {
		top: 70%;
		left: 90%;
	}

	.image3d-container .image3d-80:hover ~ .image3d-content {
		transform: rotateX(-15deg) rotateY(25deg);
	}

	.image3d-container .image3d-80:hover ~ .image3d-content:before {
		transform: translateY(-15%);
	}

	.image3d-container .image3d-81 {
		top: 80%;
		left: 0;
	}

	.image3d-container .image3d-81:hover ~ .image3d-content {
		transform: rotateX(-20deg) rotateY(-20deg);
	}

	.image3d-container .image3d-81:hover ~ .image3d-content:before {
		transform: translateY(-20%);
	}

	.image3d-container .image3d-82 {
		top: 80%;
		left: 10%;
	}

	.image3d-container .image3d-82:hover ~ .image3d-content {
		transform: rotateX(-20deg) rotateY(-15deg);
	}

	.image3d-container .image3d-82:hover ~ .image3d-content:before {
		transform: translateY(-20%);
	}

	.image3d-container .image3d-83 {
		top: 80%;
		left: 20%;
	}

	.image3d-container .image3d-83:hover ~ .image3d-content {
		transform: rotateX(-20deg) rotateY(-10deg);
	}

	.image3d-container .image3d-83:hover ~ .image3d-content:before {
		transform: translateY(-20%);
	}

	.image3d-container .image3d-84 {
		top: 80%;
		left: 30%;
	}

	.image3d-container .image3d-84:hover ~ .image3d-content {
		transform: rotateX(-20deg) rotateY(-5deg);
	}

	.image3d-container .image3d-84:hover ~ .image3d-content:before {
		transform: translateY(-20%);
	}

	.image3d-container .image3d-85 {
		top: 80%;
		left: 40%;
	}

	.image3d-container .image3d-85:hover ~ .image3d-content {
		transform: rotateX(-20deg) rotateY(0deg);
	}

	.image3d-container .image3d-85:hover ~ .image3d-content:before {
		transform: translateY(-20%);
	}

	.image3d-container .image3d-86 {
		top: 80%;
		left: 50%;
	}

	.image3d-container .image3d-86:hover ~ .image3d-content {
		transform: rotateX(-20deg) rotateY(5deg);
	}

	.image3d-container .image3d-86:hover ~ .image3d-content:before {
		transform: translateY(-20%);
	}

	.image3d-container .image3d-87 {
		top: 80%;
		left: 60%;
	}

	.image3d-container .image3d-87:hover ~ .image3d-content {
		transform: rotateX(-20deg) rotateY(10deg);
	}

	.image3d-container .image3d-87:hover ~ .image3d-content:before {
		transform: translateY(-20%);
	}

	.image3d-container .image3d-88 {
		top: 80%;
		left: 70%;
	}

	.image3d-container .image3d-88:hover ~ .image3d-content {
		transform: rotateX(-20deg) rotateY(15deg);
	}

	.image3d-container .image3d-88:hover ~ .image3d-content:before {
		transform: translateY(-20%);
	}

	.image3d-container .image3d-89 {
		top: 80%;
		left: 80%;
	}

	.image3d-container .image3d-89:hover ~ .image3d-content {
		transform: rotateX(-20deg) rotateY(20deg);
	}

	.image3d-container .image3d-89:hover ~ .image3d-content:before {
		transform: translateY(-20%);
	}

	.image3d-container .image3d-90 {
		top: 80%;
		left: 90%;
	}

	.image3d-container .image3d-90:hover ~ .image3d-content {
		transform: rotateX(-20deg) rotateY(25deg);
	}

	.image3d-container .image3d-90:hover ~ .image3d-content:before {
		transform: translateY(-20%);
	}

	.image3d-container .image3d-91 {
		top: 90%;
		left: 0;
	}

	.image3d-container .image3d-91:hover ~ .image3d-content {
		transform: rotateX(-25deg) rotateY(-20deg);
	}

	.image3d-container .image3d-91:hover ~ .image3d-content:before {
		transform: translateY(-25%);
	}

	.image3d-container .image3d-92 {
		top: 90%;
		left: 10%;
	}

	.image3d-container .image3d-92:hover ~ .image3d-content {
		transform: rotateX(-25deg) rotateY(-15deg);
	}

	.image3d-container .image3d-92:hover ~ .image3d-content:before {
		transform: translateY(-25%);
	}

	.image3d-container .image3d-93 {
		top: 90%;
		left: 20%;
	}

	.image3d-container .image3d-93:hover ~ .image3d-content {
		transform: rotateX(-25deg) rotateY(-10deg);
	}

	.image3d-container .image3d-93:hover ~ .image3d-content:before {
		transform: translateY(-25%);
	}

	.image3d-container .image3d-94 {
		top: 90%;
		left: 30%;
	}

	.image3d-container .image3d-94:hover ~ .image3d-content {
		transform: rotateX(-25deg) rotateY(-5deg);
	}

	.image3d-container .image3d-94:hover ~ .image3d-content:before {
		transform: translateY(-25%);
	}

	.image3d-container .image3d-95 {
		top: 90%;
		left: 40%;
	}

	.image3d-container .image3d-95:hover ~ .image3d-content {
		transform: rotateX(-25deg) rotateY(0deg);
	}

	.image3d-container .image3d-95:hover ~ .image3d-content:before {
		transform: translateY(-25%);
	}

	.image3d-container .image3d-96 {
		top: 90%;
		left: 50%;
	}

	.image3d-container .image3d-96:hover ~ .image3d-content {
		transform: rotateX(-25deg) rotateY(5deg);
	}

	.image3d-container .image3d-96:hover ~ .image3d-content:before {
		transform: translateY(-25%);
	}

	.image3d-container .image3d-97 {
		top: 90%;
		left: 60%;
	}

	.image3d-container .image3d-97:hover ~ .image3d-content {
		transform: rotateX(-25deg) rotateY(10deg);
	}

	.image3d-container .image3d-97:hover ~ .image3d-content:before {
		transform: translateY(-25%);
	}

	.image3d-container .image3d-98 {
		top: 90%;
		left: 70%;
	}

	.image3d-container .image3d-98:hover ~ .image3d-content {
		transform: rotateX(-25deg) rotateY(15deg);
	}

	.image3d-container .image3d-98:hover ~ .image3d-content:before {
		transform: translateY(-25%);
	}

	.image3d-container .image3d-99 {
		top: 90%;
		left: 80%;
	}

	.image3d-container .image3d-99:hover ~ .image3d-content {
		transform: rotateX(-25deg) rotateY(20deg);
	}

	.image3d-container .image3d-99:hover ~ .image3d-content:before {
		transform: translateY(-25%);
	}

	.image3d-container .image3d-100 {
		top: 90%;
		left: 90%;
	}

	.image3d-container .image3d-100:hover ~ .image3d-content {
		transform: rotateX(-25deg) rotateY(25deg);
	}

	.image3d-container .image3d-100:hover ~ .image3d-content:before {
		transform: translateY(-25%);
	}
</style>

<script>
	export let url
	export let image
	export let name
</script>

<div class="image3d-container" on:click {...$$props}>
	<a class="image3d image3d-1" href="{url}"></a>
	<a class="image3d image3d-2" href="{url}"></a>
	<a class="image3d image3d-3" href="{url}"></a>
	<a class="image3d image3d-4" href="{url}"></a>
	<a class="image3d image3d-5" href="{url}"></a>
	<a class="image3d image3d-6" href="{url}"></a>
	<a class="image3d image3d-7" href="{url}"></a>
	<a class="image3d image3d-8" href="{url}"></a>
	<a class="image3d image3d-9" href="{url}"></a>
	<a class="image3d image3d-10" href="{url}"></a>
	<a class="image3d image3d-11" href="{url}"></a>
	<a class="image3d image3d-12" href="{url}"></a>
	<a class="image3d image3d-13" href="{url}"></a>
	<a class="image3d image3d-14" href="{url}"></a>
	<a class="image3d image3d-15" href="{url}"></a>
	<a class="image3d image3d-16" href="{url}"></a>
	<a class="image3d image3d-17" href="{url}"></a>
	<a class="image3d image3d-18" href="{url}"></a>
	<a class="image3d image3d-19" href="{url}"></a>
	<a class="image3d image3d-20" href="{url}"></a>
	<a class="image3d image3d-21" href="{url}"></a>
	<a class="image3d image3d-22" href="{url}"></a>
	<a class="image3d image3d-23" href="{url}"></a>
	<a class="image3d image3d-24" href="{url}"></a>
	<a class="image3d image3d-25" href="{url}"></a>
	<a class="image3d image3d-26" href="{url}"></a>
	<a class="image3d image3d-27" href="{url}"></a>
	<a class="image3d image3d-28" href="{url}"></a>
	<a class="image3d image3d-29" href="{url}"></a>
	<a class="image3d image3d-30" href="{url}"></a>
	<a class="image3d image3d-31" href="{url}"></a>
	<a class="image3d image3d-32" href="{url}"></a>
	<a class="image3d image3d-33" href="{url}"></a>
	<a class="image3d image3d-34" href="{url}"></a>
	<a class="image3d image3d-35" href="{url}"></a>
	<a class="image3d image3d-36" href="{url}"></a>
	<a class="image3d image3d-37" href="{url}"></a>
	<a class="image3d image3d-38" href="{url}"></a>
	<a class="image3d image3d-39" href="{url}"></a>
	<a class="image3d image3d-40" href="{url}"></a>
	<a class="image3d image3d-41" href="{url}"></a>
	<a class="image3d image3d-42" href="{url}"></a>
	<a class="image3d image3d-43" href="{url}"></a>
	<a class="image3d image3d-44" href="{url}"></a>
	<a class="image3d image3d-45" href="{url}"></a>
	<a class="image3d image3d-46" href="{url}"></a>
	<a class="image3d image3d-47" href="{url}"></a>
	<a class="image3d image3d-48" href="{url}"></a>
	<a class="image3d image3d-49" href="{url}"></a>
	<a class="image3d image3d-50" href="{url}"></a>
	<a class="image3d image3d-51" href="{url}"></a>
	<a class="image3d image3d-52" href="{url}"></a>
	<a class="image3d image3d-53" href="{url}"></a>
	<a class="image3d image3d-54" href="{url}"></a>
	<a class="image3d image3d-55" href="{url}"></a>
	<a class="image3d image3d-56" href="{url}"></a>
	<a class="image3d image3d-57" href="{url}"></a>
	<a class="image3d image3d-58" href="{url}"></a>
	<a class="image3d image3d-59" href="{url}"></a>
	<a class="image3d image3d-60" href="{url}"></a>
	<a class="image3d image3d-61" href="{url}"></a>
	<a class="image3d image3d-62" href="{url}"></a>
	<a class="image3d image3d-63" href="{url}"></a>
	<a class="image3d image3d-64" href="{url}"></a>
	<a class="image3d image3d-65" href="{url}"></a>
	<a class="image3d image3d-66" href="{url}"></a>
	<a class="image3d image3d-67" href="{url}"></a>
	<a class="image3d image3d-68" href="{url}"></a>
	<a class="image3d image3d-69" href="{url}"></a>
	<a class="image3d image3d-70" href="{url}"></a>
	<a class="image3d image3d-71" href="{url}"></a>
	<a class="image3d image3d-72" href="{url}"></a>
	<a class="image3d image3d-73" href="{url}"></a>
	<a class="image3d image3d-74" href="{url}"></a>
	<a class="image3d image3d-75" href="{url}"></a>
	<a class="image3d image3d-76" href="{url}"></a>
	<a class="image3d image3d-77" href="{url}"></a>
	<a class="image3d image3d-78" href="{url}"></a>
	<a class="image3d image3d-79" href="{url}"></a>
	<a class="image3d image3d-80" href="{url}"></a>
	<a class="image3d image3d-81" href="{url}"></a>
	<a class="image3d image3d-82" href="{url}"></a>
	<a class="image3d image3d-83" href="{url}"></a>
	<a class="image3d image3d-84" href="{url}"></a>
	<a class="image3d image3d-85" href="{url}"></a>
	<a class="image3d image3d-86" href="{url}"></a>
	<a class="image3d image3d-87" href="{url}"></a>
	<a class="image3d image3d-88" href="{url}"></a>
	<a class="image3d image3d-89" href="{url}"></a>
	<a class="image3d image3d-90" href="{url}"></a>
	<a class="image3d image3d-91" href="{url}"></a>
	<a class="image3d image3d-92" href="{url}"></a>
	<a class="image3d image3d-93" href="{url}"></a>
	<a class="image3d image3d-94" href="{url}"></a>
	<a class="image3d image3d-95" href="{url}"></a>
	<a class="image3d image3d-96" href="{url}"></a>
	<a class="image3d image3d-97" href="{url}"></a>
	<a class="image3d image3d-98" href="{url}"></a>
	<a class="image3d image3d-99" href="{url}"></a>
	<a class="image3d image3d-100" href="{url}"></a>
	<div class="image3d-content" style="background: #000 url({image}) center; background-size: cover;"><span>{name}</span></div>
</div>