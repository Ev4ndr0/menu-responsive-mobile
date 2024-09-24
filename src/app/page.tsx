import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm: ml-14 p-4">
      <section className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-x1 text-gray-800 select-none">
              Total vendas

            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Total em 90 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold"> R$ 40</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-x1 text-gray-800 select-none">
              Novos clientes

            </CardTitle>
            <Users className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
            Novos clientes em 30 dias
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">234</p>
          </CardContent>
        </Card>

        </section>
    </main>
      
  );
}
