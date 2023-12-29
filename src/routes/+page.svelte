<script lang="ts">
	import { Modal, getModalStore, AppBar, LightSwitch } from '@skeletonlabs/skeleton';
  import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	const modalStore = getModalStore();
	const salt = "sdnejnu893ufjnjk"
	async function calcHash(m: string): Promise<string> {
		let msgUint8 = new TextEncoder("utf-8").encode(m);
		let buf = await crypto.subtle.digest('SHA-256', msgUint8)
		let hashArray = Array.from(new Uint8Array(buf));
    let hashHex = hashArray.map(function(b){return b.toString(16).padStart(2, '0')}).join('');
		return hashHex;
	}
	async function submit(ev: any) {
		const ptn = "70996d823688894ce7e02bb2a806b9617bc78b7153aadb91580ca96477ac9b03";
		ev.preventDefault();
		let hash = await calcHash(salt+document.form.name.value.toUpperCase())
		if(hash!=ptn){
			const modal: ModalSettings = {
				type: 'alert',
				// Data
				title: 'Error',
				body: '入力が合いませんでした。',
			};
			modalStore.trigger(modal);
			return;
		}
			const modal: ModalSettings = {
				type: 'confirm',
				// Data
				title: '電技OBの会にようこそ',
				body: 'あらかじめ、<a class="anchor" href="https://discord.com/register">Discord</a>のアカウントを作ってからアクセスしてください。<br/><a class="anchor" href="https://discord.gg/PDtAhMWv?event=1190105586562510968">Discord invite URL</a><br/>2024/01/01 21:00~23:00 にビデオミーティングを開催予定です。参加お待ちしていますー。もちろんテキストのみの参加でも大歓迎！<br/>何か問題相談あればメールください:<a class="anchor" href=mailto:noboru@irieda.com>イリエダ宛メール</a>',
				image: 'https://chart.googleapis.com/chart?cht=qr&chs=600x300&chld=L|0&chl=https%3A%2F%2Fdiscord.gg%2FPDtAhMWv%3Fevent%3D1190105586562510968'
			};
			modalStore.trigger(modal);
	}
</script>
<div class="flex flex-col h-screen">
	<div class="w-full">
		<AppBar slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="trail"><LightSwitch /></svelte:fragment>
		</AppBar>
	</div>
	<div class="flex-1 mx-auto flex place-content-center items-center">
		<div class="space-y-5">
			<h1 class="h1">OECU電技OBの会（Discordサーバー）への招待</h1>
			<p>クラブの略称をアルファベットで入力してください。</p>
			<form name="form" on:submit={submit}>
				<div class="input-group input-group-divider grid-cols-[1fr_auto]">
					<input name="name" type="text" placeholder="クラブの略称をアルファベットで入力" />
					<button class="variant-filled-secondary">入力</button>
				</div>
			</form>
		</div>
	</div>
</div>
