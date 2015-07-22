package br.com.caelum.vraptor.angularexample.controller;

import java.util.List;

import javax.inject.Inject;

import br.com.caelum.vraptor.Consumes;
import br.com.caelum.vraptor.Controller;
import br.com.caelum.vraptor.Delete;
import br.com.caelum.vraptor.Get;
import br.com.caelum.vraptor.Path;
import br.com.caelum.vraptor.Post;
import br.com.caelum.vraptor.Put;
import br.com.caelum.vraptor.Result;
import br.com.caelum.vraptor.angularexample.dao.CustomerDAO;
import br.com.caelum.vraptor.angularexample.model.Customer;
import br.com.caelum.vraptor.view.Results;

@Controller
@Path("customers")
public class CustomersController {

	private Result result;
	private CustomerDAO dao;

	@Inject
	public CustomersController(Result result, CustomerDAO dao) {
		this.result = result;
		this.dao = dao;
	}

	/**
	 * @deprecated CDI's eyes only
	 */
	public CustomersController() {
		this(null, null);
	}

	@Get
	public void list() {
		List<Customer> customers = dao.listAll();
		result.use(Results.json()).from(customers).serialize();
	}

	@Post
	@Consumes("application/json")
	public void save(Customer customer) {
		dao.add(customer);
		result.use(Results.json()).from(customer).serialize();
	}

	@Put("/{customer.id}")
	@Consumes("application/json")
	public void update(Customer customer) {
		dao.update(customer);
		result.use(Results.json()).from(customer).serialize();
	}

	@Delete("/{id}")
	public void delete(Long id) {
		dao.delete(id);
		result.use(Results.status()).ok();
	}
}
