import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ourSolutionsData } from '@/constants'

export function OurSolutionSection() {
	return (
		<div className=" container my-20 ">
			<div className="flex justify-center items-center">
				<h1
					className="text-3xl md:text-4xl font-bold mb-12 text-center max-w-[600px]"
					style={{ lineHeight: '52px' }}
				>
					Solving your Digital Marketing and E-commerce Bottlenecks
				</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{ourSolutionsData.map((service, index) => (
					<Card key={index} className="flex flex-col h-full">
						<CardHeader className="pb-4">
							<CardTitle className="text-xl font-bold">{service.title}</CardTitle>
							<CardDescription className="text-sm text-muted-foreground">
								{service.category}
							</CardDescription>
						</CardHeader>
						<CardContent className="flex-grow">
							<p className="mb-6 text-sm text-muted-foreground">{service.description}</p>
							<div className="space-y-4">
								{service.features.map((feature, featureIndex) => (
									<div key={featureIndex} className="flex items-center space-x-3">
										<feature.icon className={`h-5 w-5 ${feature.color}`} />
										<span className="text-sm">{feature.text}</span>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
