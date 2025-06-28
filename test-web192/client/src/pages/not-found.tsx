import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-doc-bg pt-16">
      <Card className="w-full max-w-md mx-4 bg-doc-surface border-doc-border">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-doc-text">
              404 Page Not Found
            </h1>
          </div>

          <p className="mt-4 text-sm text-doc-text-muted">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
