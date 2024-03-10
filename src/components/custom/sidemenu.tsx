import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Plus } from "lucide-react"

export function SideMenu() {
    return (
        <div className="max-w-full md:max-w-xs mt-4">
            <div className="h-10 items-center justify-center rounded-lg bg-muted p-1 grid w-full grid-cols-1 border">
                <div className="h-full bg-background rounded-lg flex items-center justify-center">
                    <p className="font-medium">Versão do modelo: GPT 4</p>
                </div>
            </div>
            <Card className="mt-2">
                <CardHeader>
                    <CardTitle>Personalizar.</CardTitle>
                    <CardDescription>
                        Você pode personalizar o modelo gpt de acordo com suas preferências.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="model">Modelo</Label>
                        <Select name="model" defaultValue="default">
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="default">Padrão</SelectItem>
                                    <SelectItem value="Davinci">Davinci</SelectItem>
                                    <SelectItem value="creative">Teste</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="responseStyle">Estilo de Resposta</Label>
                        <Select name="responseStyle" defaultValue="balanced">
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione..." />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="logic">Lógico</SelectItem>
                                    <SelectItem value="balanced">Balanceado</SelectItem>
                                    <SelectItem value="creative">Criativo</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">
                        <Plus className="mr-2 h-4 w-4" />Novo Chat
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}
