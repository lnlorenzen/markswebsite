import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function HomePage() {
  return (
    <div>
      <Card className="my-custom-class">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the card content.</p>
        </CardContent>
      </Card>
    </div>
  );
}