module.exports = {
	apps: [
		{
			script: 'pnpm start',
		},
	],
	deploy: {
		production: {
			user: 'qbekkai',
			host: '176.31.162.67',
			ref: 'origin/main',
			repo: 'git@github.com:qbekkai/peignot.git',
			path: '/home/qbekkai/peignot',
			'pre-deploy-local': '',
			'post-deploy':
				'source ~/.nvm/nvm.sh && pnpm i && pnpm run build && pm2 reload ecosystem.config.js --env production',
			'pre-setup': '',
			ssh_options: 'ForwardAgent=yes',
		},
	},
};
