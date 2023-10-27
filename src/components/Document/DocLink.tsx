import { cn } from "@/lib/utils";
import Link from "next/link";

export function DocLink(props: {
	href: string;
	children: React.ReactNode;
	className?: string;
}) {
	return (
		<Link
			href={props.href}
			className={cn("text-accent-500 hover:text-f-100 ", props.className)}
			target={props.href.startsWith("http") ? "_blank" : undefined}
		>
			{props.children}
		</Link>
	);
}
