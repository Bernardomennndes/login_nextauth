import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Card,
    CardHeader, 
    CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
    Form,
    FormField,
    FormControl,
    FormDescription,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { CardWrapper } from "../auth/card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";

export default function IndiceHoma(){
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email:"",
            password:"",
        }  
    });

    return(
        <div className="flex items-center justify-center min-h-screen bg-white">
            <CardWrapper
            headerTitle="Um novo Exame"
            headerLabel="Colesterol Total e Fracionado"
            backButtonHref="/add-exame"
            backButtonLabel="Não tenho nada para registrar"
        >
            <Form {...form}>
                <form 
                    className="space-y-6"
                >
                    <div className="grid grid-cols-2 gap-7 ">

                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Insulina</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Inferior a 190 mg/dL"
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Glicose de Jejum</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Inferior a 190 mg/dL"
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Índice de Homa Beta</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Inferior a 190 mg/dL"
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Índice de Homa IR</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Inferior a 190 mg/dL"
                                    />
                                </FormControl>
                            </FormItem>
                        )}>
                        </FormField>
                

                    </div>

                </form>
            </Form>
        </CardWrapper>
        </div>
    )
}