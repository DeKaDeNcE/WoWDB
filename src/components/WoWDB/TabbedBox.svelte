<style>
	:global(.tabbed) {
		margin-top: 60px;
	}

	:global(.tabbed .tabs) {
		position: absolute;
		left: 0;
		top: 0;
		margin: 0;
		padding: 0;
		transform: translateY(calc(-100% + 6px));
		list-style-type: none;
		font-size: 1em;
	}

	:global(.tabbed .tabs li) {
		position: relative;
		float: left;
		margin-left: 7px;
		padding: 0;
	}

	:global(.tabbed .tabs li a) {
		display: block;
		position: relative;
		padding: 10px 8px 18px;
	}

	:global(.tabbed .tabs li.active) {
		padding: 0 7px;
	}

	:global(.tabbed .tabs li.active a) {
		padding: 10px 16px 18px;
		border-radius: 5px 5px 0 0;
		box-shadow: inset 0 1px 7px 0 rgba(0, 0, 0, 0.8);
		background: #212121;
		color: #fff;
		text-decoration: none;
		cursor: default;
	}

	:global(.tabbed .tabs li.active a span.label) {
		position: relative;
		z-index: 2;
	}

	:global(.tabbed .tabs li.active a span.corners) {
		display: block;
		height: 15px;
		position: absolute;
		left: -7px;
		right: -7px;
		bottom: -2px;
		z-index: 1;
		overflow: hidden;
		background: #212121;
	}

	:global(.tabbed .tabs li.active a span.corners:before, .tabbed .tabs li.active a span.corners:after) {
		content: ' ';
		display: block;
		width: 20px;
		height: 20px;
		position: absolute;
		bottom: 8px;
		background: #2f2f2f;
		box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.8);
	}

	:global(.tabbed .tabs li.active a span.corners:before) {
		left: -13px;
		border-radius: 0 0 5px 0;
	}

	:global(.tabbed .tabs li.active a span.corners:after) {
		right: -13px;
		border-radius: 0 0 0 5px;
	}
</style>

<script>
	import Link from './Link.svelte'

	export let tabs
</script>

<div class="box tabbed">
	<ul class="tabs">
		{#each tabs as tab}
			<li class={tab.active ? 'active': ''}>
				<Link to={tab.path}>
					<span class="label">{tab.label}</span>
					<span class="corners"></span>
				</Link>
			</li>
		{/each}
	</ul>

	<slot/>
</div>