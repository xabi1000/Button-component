<script>
	// PROPS STYLES
	export let title = 'Default';
	export let disabled = false;
	export let background = '';
	export let color = '';
	export let paddingBlock = 1;
	export let paddingInline = 1;
	export let width = '5rem';
	export let rigthIcon = false;
	export let leftIcon = false;
	// CLASES CSS
	export let shadow = '';
	export let hover = '';
	export let outline = '';
	export let focus = '';
</script>

<div class="btn_container">
	<p><slot /></p>
	<button
		class={`${hover} ${shadow} ${outline} ${focus}`}
		{disabled}
		style={`background-color: ${background}; color: ${color}; padding-block: ${paddingBlock}em; padding-inline:${paddingInline}em ;min-width: ${width};`}
	>
		{#if leftIcon}
			<svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					fill="currentColor"
					d="M2 5.27L3.28 4L5 5.72l.28.28l1 1l2 2L16 16.72l2 2l2 2L18.73 22l-1.46-1.46c-.34.29-.77.46-1.27.46H8c-1.1 0-2-.9-2-2V9.27l-4-4M8 19h7.73L8 11.27V19M18 7v9.18l-2-2V9h-5.18l-2-2H18m-2.5-3H19v2H7.82l-2-2H8.5l1-1h5l1 1Z"
				/>
			</svg>
			{title}
		{:else if rigthIcon}
			{title}
			<svg width="25" height="25" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
				<path
					fill="currentColor"
					d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14a14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2Zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7Z"
				/>
				<path fill="none" d="M24 17h-7v7h-2v-7H8v-2h7V8h2v7h7v2z" />
			</svg>
		{:else}
			{title}
		{/if}
	</button>
</div>

<style>
	.btn_container {
		display: grid;
		place-items: center;
		align-content: start;
		padding: 1em;
		flex: 1 0 minmax(250px);
		box-shadow: 1px 0 6px currentColor;
		min-height: 155px;
	}
	p {
		font-size: 0.7rem;
	}

	button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5em;
		transition: all 0.5s, color 0.1s;
		font-size: 1em;
		font-weight: 500;
		margin: 1rem;
		border-radius: 5px;
		border: none;
		cursor: pointer;
	}

	.shadow {
		box-shadow: 0 0px 12px 0px #53ec0e;
	}

	.outline {
		outline: 4px auto -webkit-focus-ring-color;
	}

	.hover:hover {
		box-shadow: 0 0px 9px 0px #53ec0e;
		transform: translate(0px, 3px);
		color: rgb(102, 255, 0);
		background-color: transparent;
	}

	.outline:active {
		outline: 2px solid red;
	}

	.focus:focus {
		background-color: yellow;
		color: black;
		outline: 1px solid wheat;
	}
</style>
