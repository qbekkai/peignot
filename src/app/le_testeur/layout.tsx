import Main from '@COMPS/MainElement.component';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Tester-moi ! | Peignot',
};

export default function LeTesteurLayout({ children }: React.PropsWithChildren) {
	return (
		<Main>
			<div className="h-full flex flex-col font-peignot p-10">
				<h1 className="w-full text-center text-5xl pb-5">
					Testez le Peignot à votre guise.
				</h1>
				{children}
			</div>
		</Main>
	);
}
