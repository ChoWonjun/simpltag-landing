import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ScreenshotCardProps {
  image: string;
  alt: string;
  title?: string;
  description?: string;
}

export function ScreenshotCard({ image, alt, title, description }: ScreenshotCardProps) {
  return (
    <Card className="shadow-none overflow-hidden border-0">
      <CardContent className="!px-0">
        <div className="relative w-full aspect-[9/16]">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      </CardContent>
      {(title || description) && (
        <CardHeader className="!px-8">
          {title && (
            <CardTitle className="text-base font-semibold">
              {title}
            </CardTitle>
          )}
          {description && (
            <CardDescription className="text-sm">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      )}
    </Card>
  );
}
